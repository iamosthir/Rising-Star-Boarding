<template>
  <div class="row">
    <div class="col-12 mt-4" v-if="is_loading">
      <h3 class="p-2 hs-title">Recent Boarding History</h3>
      <hr>
      <div class="row">
        <div class="col-12" v-for="n in 10" :key="n">
          <skeleton width="100%" height="30px" />
        </div>
      </div>
    </div>



    <div class="col-md-12 mt-4" v-if="!is_loading">
      <h3 class="p-2 hs-title">Recent Boarding History</h3>
      <hr>
      <div class="p-2 table-responsive">
        <table class="table table-hover booking-table">
          <thead>
            <tr class="table-head">
              <th>Booking ID</th>
              <th>Reservation Range</th>
              <th>Total Days</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="table-body-c">
            <template v-if="boardings.length > 0">
              <tr v-for="(boarding,i) in boardings" :key="i">
                <td>#{{ boarding.id }}</td>
                <td>{{ boarding.range }}</td>
                <td>{{ boarding.stay_day }} Days</td>
                <td v-if="boarding.price">{{ boarding.price }} USD</td>
                <td v-else>-</td>
                <td>
                  <span v-if="boarding.status == 'pending'" class="badge bg-warning">{{ boarding.statusText }}</span>
                  <span v-else-if="boarding.status == 'onprogress'" class="badge bg-info">{{ boarding.statusText }}</span>
                  <span v-else-if="boarding.status == 'canceled'" class="badge bg-danger">{{ boarding.statusText }}</span>
                  <span v-else-if="boarding.status == 'completed'" class="badge bg-success">{{ boarding.statusText }}</span>
                </td>
                <td>
                  <div class="dropdown">
                    <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><router-link :to="{name: 'boarding-details', params:{id: boarding.id}}" class="dropdown-item" type="button">See Details</router-link></li>
                      <li v-if="boarding.status=='pending'"><button @click="cancelBooking(boarding.id,i)" class="dropdown-item text-danger" type="button">Cancel Booking</button></li>
                    </ul>
                  </div>
                </td>
              </tr>
            </template>

            <template v-else>
              <tr>
                <td colspan="6" class="text-danger">No booking records</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <pagination :data="paginateData" @pagination-change-page="getBoardingHistory"></pagination>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      is_loading: true,
      boardings: [],
      paginateData: {},
    }
  },
  methods:{
    getBoardingHistory(page = 1){
      axios.get(api2+"get-boarding-history?page="+page)
      .then(resp=>{
        return resp.data;
      }).then(data=>{
        this.boardings = data.mainData;
        this.paginateData = data.paginateData;
        this.is_loading = false;
      }).catch(err=>{
        console.error(err.response.data);
      })
    },

    cancelBooking(boardingId,index){
      swal.fire({
        title: "Alert!",
        text: "Are you sure you want to cancel your booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(res=>{
        if(res.isConfirmed){
          axios.post(api2+"cancel-boarding",{
            boardingId: boardingId
          }).then(resp=>{
            return resp.data;
          }).then(data=>{
            if(data.status == "ok"){
              swal.fire("Booking canceled",data.msg,"success");
              this.boardings[index].status = 'canceled';
              this.boardings[index].statusText = 'Canceled';
            } 
            else{
              swal.fire("Something Went Wrong",data.msg,"error");
            }
          }).catch(err=>{
            console.error(err.response.data);
          })
        }
      });
    }

  },
  created(){
    this.getBoardingHistory();
  }
}
</script>

<style>

</style>