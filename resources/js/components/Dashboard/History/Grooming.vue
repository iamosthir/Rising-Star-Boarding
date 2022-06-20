<template>
<div class="row">
    <div class="col-12 mt-4" v-if="is_loading">
      <h3 class="p-2 hs-title">Recent Grooming History</h3>
      <hr>
      <div class="row">
        <div class="col-12 mt-2" v-for="n in 10" :key="n">
          <skeleton width="100%" height="30px" />
        </div>
      </div>
    </div>



    <div class="col-md-12 mt-4" v-if="!is_loading">
      <h3 class="p-2 hs-title">Recent Grooming History</h3>
      <hr>
      <div class="p-2 table-responsive">
        <table class="table table-hover booking-table">
          <thead>
            <tr class="table-head">
              <th>Appointment ID</th>
              <th>Appointment Date and Time</th>
              <th>Ends at</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="table-body-c">
            <template v-if="groomings.length > 0">
              <tr v-for="(grooming,i) in groomings" :key="i">
                <td>#{{ grooming.id }}</td>
                <td>{{ grooming.time }}</td>
                <td>{{ grooming.end||'-' }}</td>
                <td>
                  <span v-if="grooming.status == 'pending'" class="badge bg-warning">{{ grooming.statusText }}</span>
                  <span v-else-if="grooming.status == 'ongoing'" class="badge bg-info">{{ grooming.statusText }}</span>
                  <span v-else-if="grooming.status == 'canceled'" class="badge bg-danger">{{ grooming.statusText }}</span>
                  <span v-else-if="grooming.status == 'completed'" class="badge bg-success">{{ grooming.statusText }}</span>
                </td>
                <td>
                  <div class="dropdown">
                    <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><router-link :to="{name: 'grooming-details', params:{id: grooming.id}}" class="dropdown-item" type="button">See Details</router-link></li>
                      <li v-if="grooming.status=='pending'"><button @click="cancelOrder(grooming.id,i)" class="dropdown-item text-danger" type="button">Cancel Booking</button></li>
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
        <pagination :data="paginateData" @pagination-change-page="getGroomingHistory"></pagination>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      is_loading: true,
      groomings: [],
      paginateData: {},
    }
  },
  methods:{
    getGroomingHistory(page = 1){
      axios.get(api2+"grooming-history?page="+page)
      .then(resp=>{
        return resp.data;
      }).then(data=>{
        this.groomings = data.groomings;
        this.paginateData = data.paginateData;
        this.is_loading = false;
      }).catch(err=>{
        console.error(err.response.data);
      })
    },
    cancelOrder(groomingId,index){
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
          axios.post(api2+"cancel-grooming",{
            groomingId: groomingId
          }).then(resp=>{
            return resp.data;
          }).then(data=>{
            if(data.status == "ok"){
              swal.fire("Booking Canceled", data.msg,"success");
              this.groomings[index].status = "canceled";
              this.groomings[index].statusText = "Canceled";
            } else{
              swal.fire("Failed", data.msg,"error");
            }
          }).catch(err=>{
            console.error(err.response.data);
          })
        }
      });
    }
  },
  created(){
    this.getGroomingHistory();
  }
}
</script>

<style>

</style>