<template>
  <section class="section">
    <div class="container">
      <div class="seciton-title">
          <h4 class="text-choco">Booking Details</h4>
          <img src="/image/title_img.png" alt="">
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="booking-card">
            <div class="card-header text-end">
              <div>
                  <router-link :to="{name: 'booking-history.boarding'}" class="btn-back" title="Go back"><i class="fas fa-arrow-left"></i> Go back</router-link>
              </div>
            </div>

            <div class="card-body" v-if="is_loading">
              <div class="row">
                <div class="col-12 mt-2 mb-5 text-end">
                  <skeleton width="200px" height="20px" />
                </div>

                <div class="col-md-3 col-6 mt-2">
                    <skeleton width="200px" height="20px" />
                    <br>
                    <skeleton width="150px" height="20px" />
                </div>

                <div class="col-md-3 col-6 mt-2">
                    <skeleton width="200px" height="20px" />
                    <br>
                    <skeleton width="150px" height="20px" />
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <skeleton width="200px" height="20px" />
                    <br>
                    <skeleton width="150px" height="20px" />
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <skeleton width="200px" height="20px" />
                    <br>
                    <skeleton width="150px" height="20px" />
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <skeleton width="200px" height="20px" />
                    <br>
                    <skeleton width="150px" height="20px" />
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <skeleton width="200px" height="20px" />
                    <br>
                    <skeleton width="150px" height="20px" />
                </div>
                <div class="col-md-12 mt-4">
                    <skeleton width="100%" height="30px" class="mt-2" v-for="n in 10" :key="n" />
                </div>
              </div>
            </div>

            <div class="card-body" v-if="!is_loading">
              <div class="row">
                <div class="col-12 mt-2 mb-5 text-end">
                  <span v-if="bookingDetails.status=='pending'" class="badge badge-pill bg-warning ps-5 pe-5 pt-3 pb-3">{{ bookingDetails.statusText }}</span>
                  <span v-if="bookingDetails.status=='onprogress'" class="badge badge-pill bg-info ps-5 pe-5 pt-3 pb-3">{{ bookingDetails.statusText}}</span>
                  <span v-if="bookingDetails.status=='canceled'" class="badge badge-pill bg-danger ps-5 pe-5 pt-3 pb-3">{{ bookingDetails.statusText }}</span>
                  <span v-if="bookingDetails.status=='completed'" class="badge badge-pill bg-success ps-5 pe-5 pt-3 pb-3">{{ bookingDetails.statusText }}</span>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Booking ID</strong></h6>
                  <p># {{ bookingDetails.id }}</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Booking Date</strong></h6>
                  <p>{{ bookingDetails.date }}</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Starting Date</strong></h6>
                  <p>{{ bookingDetails.startingDate }}</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Ending Date</strong></h6>
                  <p>{{ bookingDetails.endingDate }}</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Total Days</strong></h6>
                  <p>{{ bookingDetails.totalDays }} Days</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Price</strong></h6>
                  <p v-if="bookingDetails.price">{{ bookingDetails.price }} USD</p>
                  <p v-else>---</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Drop off time</strong></h6>
                  <p>{{ bookingDetails.checkIn||'---' }}</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                  <h6><strong>Pick up time</strong></h6>
                  <p>{{ bookingDetails.checkOut||'---' }}</p>
                </div>
                <div class="col-md-12 mt-4">
                  <h4 class="text-center text-blue">Booking Summary</h4>
                  <div class="table-responsive mt-4">
                    <table class="table pet-table booking-details-tb">
                      <thead>
                        <tr class="table-head">
                          <th></th>
                          <th>Pet Name</th>
                          <th>Assigned Kennel</th>
                        </tr>
                      </thead>
                      <tbody class="table-body-c">
                        <tr v-for="(pet,i) in pets" :key="i">
                          <td class="text-end">
                            <img :src="pet.photo" alt="" class="pet-thumb">
                          </td>
                          <td>{{ pet.petName }}</td>
                          <td>{{ pet.kennel||'---' }}</td>
                        </tr>


                        <tr class="table-footer">
                            <td></td>
                            <td><strong>Grand Total</strong></td>
                            <td v-if="bookingDetails.price">{{ bookingDetails.price }} USD</td>
                            <td v-else>---</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-12 mt-4" v-if="bookingDetails.status == 'pending'">
                  <button class="booking-btn" @click="cancelBooking(bookingDetails.id,i)">Cancel Booking</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      is_loading: true,
      bookingDetails: {},
      pets: [],
      pricing: {},
    };
  },
  methods: {
    getBoardingData() {
      axios
        .get(api2 + "get-boarding-details", {
          params: {
            boardingId: this.$route.params.id,
          },
        })
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          if (data.status == "ok") {
              this.bookingDetails = data.data.bookingData;
              this.pets = data.data.pets;
              this.pricing = data.data.pricing;
            this.is_loading = false;
          } else {
            this.$router.push({
              name: "booking-history.boarding",
            });
          }
        })
        .catch((err) => {
          console.error(err.response.data);
          this.$router.push({
            name: "booking-history.boarding",
          });
        });
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
              this.bookingDetails.status = 'canceled';
              this.bookingDetails.statusText = 'Canceled';
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
  created() {
    this.getBoardingData();
  },
};
</script>

<style></style>
