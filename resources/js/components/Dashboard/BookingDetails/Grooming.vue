<template>
  <section class="section">
      <div class="container">
        <div class="seciton-title">
            <h4 class="text-choco">Appointment Details</h4>
            <img src="/image/title_img.png" alt="">
        </div>
          <div class="row justify-content-center">
              <div class="col-md-8">
                  <div class="booking-card">
                      <div class="card-header text-end">
                        <div>
                            <router-link :to="{name: 'booking-history.grooming'}" class="btn-back" title="Go back"><i class="fas fa-arrow-left"></i> Go back</router-link>
                        </div>
                      </div>
                      <div class="card-body" v-if="!is_loading">
                        <ul class="list-group">
                            <li class="list-group-item ap-item d-flex justify-content-between align-items-center">
                                <b class="text-choco">Appointment ID</b>
                                <strong>#{{ bookingData.id }}</strong>
                            </li>
                            <li class="list-group-item ap-item d-flex justify-content-between align-items-center">
                                <b class="text-choco">Appointment Date</b>
                                <strong>{{ bookingData.startDate }}</strong>
                            </li>
                            <li class="list-group-item ap-item d-flex justify-content-between align-items-center">
                                <b class="text-choco">Appointment Ended At</b>
                                <strong>{{ bookingData.endTime||'-' }}</strong>
                            </li>
                            <li class="list-group-item ap-item d-flex justify-content-between align-items-center">
                                <b class="text-choco">Appointment Status</b>
                                <span v-if="bookingData.status=='pending'" class="badge badge-pill bg-warning">{{ bookingData.statusText }}</span>
                                <span v-if="bookingData.status=='ongoing'" class="badge badge-pill bg-primary">{{ bookingData.statusText }}</span>
                                <span v-if="bookingData.status=='canceled'" class="badge badge-pill bg-danger">{{ bookingData.statusText }}</span>
                                <span v-if="bookingData.status=='completed'" class="badge badge-pill bg-success">{{ bookingData.statusText }}</span>
                            </li>
                            <li class="list-group-item ap-item d-flex justify-content-between align-items-center">
                                <b class="text-choco">Bill</b>
                                <strong>{{ bookingData.price||'-' }}</strong>
                            </li>
                        </ul>
                        <h5><strong>Pets</strong></h5>
                        <div class="table-responsive mb-5">
                            <table class="mt-3 pet-table">
                                <tr class="grooming-table" v-for="(pet,i) in bookingData.pets" :key="i">
                                    <td><img :src="pet.photo" class="pet-thumb" alt=""></td>
                                    <td class="text-choco"><strong>{{ pet.name }}</strong></td>
                                </tr>
                            </table>
                        </div>
                        <h5><strong>Note</strong></h5>
                        <p>{{ bookingData.note||'---' }}</p>
                        <hr>
                        <div class="col-12 mt-4" v-if="bookingData.status == 'pending'">
                            <button class="booking-btn" @click="cancelOrder(bookingData.id)">Cancel Booking</button>
                        </div>
                      </div>
                      <!-- Skeleton -->
                      <div class="card-body" v-if="is_loading">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <skeleton width="200px" height="25px" />
                                <skeleton width="100px" height="25px" />
                            </li>
                            <hr>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <skeleton width="200px" height="25px" />
                                <skeleton width="100px" height="25px" />
                            </li>
                            <hr>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <skeleton width="200px" height="25px" />
                                <skeleton width="100px" height="25px" />
                            </li>
                            <hr>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <skeleton width="200px" height="25px" />
                                <skeleton width="100px" height="25px" />
                            </li>
                            <hr>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <skeleton width="200px" height="25px" />
                                <skeleton width="100px" height="25px" />
                            </li>
                            <hr>
                        </ul>
                        <h5><strong>Pets</strong></h5>
                        <div class="table-responsive mb-5">
                            <table class="mt-3">
                                <tr class="grooming-table" v-for="n in 4" :key="n">
                                    <td><skeleton width="50px" height="50px" /></td>
                                    <td class="text-muted"><skeleton width="200px" height="25px" /></td>
                                </tr>
                            </table>
                        </div>
                        <h5><strong>Note</strong></h5>
                        <skeleton width="100%" height="15px" />
                        <skeleton width="90%" height="15px" />
                        <skeleton width="80%" height="15px" />
                        <hr>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            bookingData: {},
        }
    },
    methods:{
        getGroomingData(){
            axios.get(api2+"get-grooming-data",{
                params:{
                    id: this.$route.params.id
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.bookingData = data.data;
                    this.is_loading = false;
                } else{
                    this.$router.push({
                        name: 'booking-history.grooming'
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: 'booking-history.grooming'
                });
            })
        },
        cancelOrder(groomingId){
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
                    this.bookingData.status = "canceled";
                    this.bookingData.statusText = "Canceled";
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
        this.getGroomingData();
    }
}
</script>

<style>

</style>