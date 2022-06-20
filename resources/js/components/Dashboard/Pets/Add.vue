<template>
  <div class="mt-5">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8">
                  <div class="profile-card bg-bg">
                      <div class="header d-flex justify-content-between">
                          <h4>Add new pet</h4>
                          <div>
                              <router-link :to="{name: 'home'}" class="btn my-btn" title="Go back"><i class="fas fa-arrow-left"></i></router-link>
                          </div>
                      </div>
                      <div class="card-body">
                          <div class="row" v-if="is_loading">
                              <div class="col-12">
                                  <skeleton width="100%" height="400px"/>
                              </div>
                          </div>

                          <div class="complete-profile-box text-center" v-if="!is_loading && status == 'denied'">
                              <h5 class="text-muted mb-4 mt-5" style="font-family: 'Bubblegum Sans;'">Complete your profile before adding pets</h5>
                              <router-link :to="{name: 'home.profile.setting'}" class="edit-profile-btn">Profile Settings</router-link>
                          </div>
                          

                          <div class="pet-form" v-if="!is_loading && status=='completed'">
                              <form @submit.prevent="createPet" class="login-form">
                                  <div class="row">
                                      <div class="col-md-6 group">
                                          <label for="">Pet name</label>
                                          <input :class="{'is-invalid' : form.errors.has('petName')}" type="text" placeholder="Pet name..." v-model="form.petName">
                                          <HasError :form="form" field="petName"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Pet Color</label>
                                          <input :class="{'is-invalid' : form.errors.has('petColor')}" type="text" placeholder="Pet color..." v-model="form.petColor">
                                          <HasError :form="form" field="petColor"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Pet Breed</label>
                                          <input :class="{'is-invalid' : form.errors.has('petBreed')}" type="text" placeholder="Pet breed..." v-model="form.petBreed">
                                          <HasError :form="form" field="petBreed"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Pet Age <small>(in years)</small></label>
                                          <input :class="{'is-invalid' : form.errors.has('petAge')}" type="number" placeholder="Pet age..." v-model="form.petAge">
                                          <HasError :form="form" field="petAge"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Gender</label>
                                          <select :class="{'is-invalid' : form.errors.has('gender')}" v-model="form.gender">
                                              <option value="" hidden>Select Gender</option>
                                              <option value="Male">Male</option>
                                              <option value="Female">Female</option>
                                          </select>
                                          <HasError :form="form" field="gender"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Rabies Exp. Date</label>
                                          <input :class="{'is-invalid' : form.errors.has('rabiesExpDate')}" type="date" v-model="form.rabiesExpDate">
                                          <HasError :form="form" field="rabiesExpDate"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Pet Photograph</label>
                                          <input type="file" class="mt-3" accept="image/*" @change="photoChange">
                                          <HasError :form="form" field="photo"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Vaccination Record</label>
                                          <input type="file" class="mt-3" accept="image/*" @change="vacChange">
                                          <HasError :form="form" field="vaccine"/>
                                      </div>
                                      <div class="col-md-12 group">
                                          <label for="">Feeding Instruction</label>
                                          <textarea :class="{'is-invalid' : form.errors.has('feed')}" style="height: 200px !important;" rows="15" v-model="form.feed"></textarea>
                                          <HasError :form="form" field="feed"/>
                                      </div>
                                      <div class="col-md-12 group">
                                          <label for="">Medication</label>
                                          <textarea :class="{'is-invalid' : form.errors.has('medic')}" style="height: 200px !important;" rows="15" v-model="form.medic"></textarea>
                                          <HasError :form="form" field="medic"/>
                                      </div>
                                      <div class="col-md-12 mb-3 d-flex justify-content-start">
                                          <Button :form="form" class="edit-profile-btn">Add</Button>
                                          <p v-if="form.progress" class="text-muted ms-4 mt-2"><strong>Uploading .... {{ form.progress.percentage }}%</strong></p>
                                      </div>
                                      <div class="col-md-12 mb-3">
                                          <AlertError :form="form">Failed to create new pet</AlertError>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Modal -->
      <div class="modal animate a-lightSpeed" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" id="popupModal2">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body text-center p-lg">
						<h1 class="text-success"><i class="fas fa-check-circle"></i></h1>
                        <h3 class="mt-4">Your pet was added successfully !</h3>
                        <div class="mt-4">
                            <button @click="closeModal" type="button" class="edit-profile-btn"><i class="fas fa-plus"></i> Add Another Pet</button>
						    <button @click="bookingPage" type="button" class="edit-profile-btn bg-choco" data-dismiss="modal"><i class="fas fa-arrow-right"></i> Make Reservation</button>
                            <button @click="homePage" type="button" class="edit-profile-btn bg-orange mt-4" data-dismiss="modal"><i class="fas fa-home"></i> Return Home</button>
                        </div>
					</div>
				</div>
			</div>
		</div>
      <!-- End -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            status: '',
            is_loading: true,
            form: new Form({
                petName: '',
                petColor: '',
                petBreed: "",
                petAge: "",
                rabiesExpDate: null,
                feed: '',
                medic: '',
                photo: '',
                vaccine: '',
                gender: '',
            }),
        }
    },
    metaInfo(){
        return{
            title: "Add pet"
        }
    },
    mounted(){
        $('#popupModal2')
            .on('show.bs.modal', function(e) {
                $(this)
                    .find('[role=document]')
                        .removeClass()
                        .addClass('modal-dialog a-lightSpeed')
        });
    },
    methods:{
        isProfileCompleted(){
            axios.get(api2+"profile-check").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.status = data.status;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        photoChange(e){
            let file = e.target.files[0];
            if(file){
                this.form.photo = file;
            }
            else{
                this.form.photo = "";
            }
        },
        vacChange(e){
            let file = e.target.files[0];
            if(file){
                this.form.vaccine = file;
            }
            else{
                this.form.vaccine = "";
            }
        },
        createPet(){
            this.form.post(api2+"add-pet")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    // swal.fire("Success",data.msg,"success");
                    this.form.reset();
                    $("input[type='file']").val("");
                    this.openModal();
                }
                else if(data.status == "fail"){
                    swal.fire("Failed",data.msg,"error");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        openModal(){
            $("#popupModal2").modal({
                backdrop: 'static',
                keyboard: false
            });
            $("#popupModal2").modal("show");
        },
        closeModal(){
            $("#popupModal2").modal("hide");
        },
        bookingPage(){
            this.closeModal();
            this.$router.push({
                name: "reservation.choose"
            });
        },
        homePage(){
            this.closeModal();
            this.$router.push({
                name: "home.profile"
            });
        }
    },
    created(){
        this.isProfileCompleted();
    }
}
</script>

<style>

</style>