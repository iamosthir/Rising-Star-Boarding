<template>
  <div class="mt-5">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8" v-if="editMode">
                  <div class="profile-card bg-bg">
                      <div class="header d-flex justify-content-between">
                          <h4 class="text-muted">Edit Mode</h4>
                          <button @click="editMode=false" class="btn my-btn"><i class="fas fa-times"></i> &nbsp; Cancel</button>
                      </div>
                      <div class="card-body">
                          <form @submit.prevent="updatePet" class="login-form">
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
                                          <label for="">Change Pet Photograph</label>
                                          <input class="mt-2" type="file" accept="image/*" @change="photoChange">
                                          <HasError :form="form" field="photo"/>
                                      </div>
                                      <div class="col-md-6 group">
                                          <label for="">Change Vaccination Record</label>
                                          <input class="mt-2" type="file" accept="image/*" @change="vacChange">
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
                                          <Button :form="form" class="rising-btn rising-btn-pink">Update</Button>
                                          <p v-if="form.progress" class="text-muted ms-4 mt-2"><strong>Uploading .... {{ form.progress.percentage }}%</strong></p>
                                      </div>
                                      <div class="col-md-12 mb-3">
                                          <AlertError :form="form">Failed to update</AlertError>
                                      </div>
                                  </div>
                              </form>
                      </div>
                  </div>
              </div>

              <div class="col-md-8" v-if="!editMode">
                  <div class="profile-card bg-bg">
                      <div class="header d-flex justify-content-between">
                          <h4>{{ petData.name }}</h4>
                          <router-link class="btn" :to="{name: 'home.profile'}"><i class="fas fa-arrow-left"></i> Go back</router-link>
                      </div>
                      <div class="card-body">
                          <!-- Skeleton -->
                          <div class="row" v-if="is_loading">
                              <div class="col-md-12 text-center mb-3">
                                  <skeleton class="user-round" width="100px" height="100px" />
                                  <br>
                                  <skeleton width="150px" height="20px" />
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                  <skeleton width="100%" height="20px" />
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                  <skeleton width="100%" height="20px" />
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                  <skeleton width="100%" height="20px" />
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                  <skeleton width="100%" height="20px" />
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                  <skeleton width="100%" height="20px" />
                              </div>
                              <div class="col-md-4 col-6 mb-3">
                                  <skeleton width="100%" height="20px" />
                              </div>
                              <div class="col-md-12 mb-3">
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                                  <skeleton width="100%" height="15px" />
                              </div>
                          </div>
                          <!-- ENd -->

                          <div class="pet-info mt-3" v-if="!is_loading">
                              <div class="row">
                                  <div class="col-12 text-center mb-5">
                                      <img v-if="petData.photo" :src="`${cdn}/uploads/customer/${petData.customer_id}/${petData.photo}`" class="user-thumb" alt="">
                                      <img v-else src="/image/dog-placeholder-tall.svg" class="user-thumb" alt="">
                                      <h3 class="mt-2 text-muted"><b>{{ petData.name }}</b></h3>
                                  </div>

                                  <div class="col-md-4 col-6 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Color</b></h6>
                                      </div>
                                      <p class="pet-details-text">{{ petData.color }}</p>
                                  </div>
                                  <div class="col-md-4 col-6 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Breed</b></h6>
                                      </div>
                                      <p class="pet-details-text">{{ petData.breed }}</p>
                                  </div>

                                  <div class="col-md-4 col-6 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Age</b></h6>
                                      </div>
                                      <p class="pet-details-text">{{ petData.age }} Years</p>
                                  </div>

                                  <div class="col-md-4 col-6 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Gender</b></h6>
                                      </div>
                                      <p class="pet-details-text">{{ petData.gender }}</p>
                                  </div>

                                  <div class="col-md-4 col-6 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Rabies Expiration Date</b></h6>
                                      </div>
                                      <p class="pet-details-text">{{ moment(petData.rabies).format("DD MMM YYYY") }}</p>
                                  </div>
                                  <div class="col-md-4 col-6 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Vaccination Record</b></h6>
                                      </div>

                                      <p v-if="petData.vac_record == null" class="pet-details-text"><span class="text-danger">
                                          <i class="fas fa-times"></i> No</span>
                                        </p>

                                      <p class="pet-details-text" v-else><span class="text-success" >
                                          <i class="fas fa-check"></i> Yes</span> <a title="Preview"
                                           target="_blank" :href="`${cdn}/uploads/customer/${petData.customer_id}/${petData.vac_record}`" class="btn text-primary">
                                           <i class="fas fa-download"></i></a>
                                        </p>

                                        
                                  </div>

                                  <div class="col-md-12 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Feeding Instruction</b></h6>
                                      </div>
                                      <div class="text-info">
                                          {{ petData.feeding }}
                                      </div>
                                  </div>
                                  <div class="col-md-12 mb-3">
                                      <div class="pet-items">
                                        <h6><b>Medication</b></h6>
                                      </div>
                                      <div class="text-info">
                                          {{ petData.medic }}
                                      </div>
                                  </div>


                              </div>
                          </div>
                      </div>
                      <div class="mt-5">
                          <div class="row">
                              <div class="col-md-12">
                                    <button @click="editMode=true" class="edit-profile-btn">Edit</button>
                                    <button :disabled="deleting" class="edit-profile-btn bg-danger" @click="deletePet">
                                        <span v-if="deleting==true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        {{ deleteText }}
                                    </button>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            petData: {},
            cdn: cdn,
            moment: moment,
            deleting:false,
            deleteText: 'Delete',
            editMode : false,
            form: new Form({
                petId: this.$route.params.id,
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
            title: "Edit Pet"
        }
    },
    methods:{
        getPetData(){
            axios.get(api2+"get-pet-data",{
                params:{
                    petId: this.$route.params.id
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.petData = data.petData;
                    this.form.petName = data.petData.name;
                    this.form.petColor = data.petData.color;
                    this.form.petAge = data.petData.age;
                    this.form.rabiesExpDate = data.petData.rabies;
                    this.form.petBreed = data.petData.breed;
                    this.form.feed = data.petData.feeding;
                    this.form.medic = data.petData.medic;
                    this.form.gender = data.petData.gender;
                    this.is_loading = false;
                }
                else{
                    this.$router.push({
                        name: "home.profile"
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: "home.profile"
                });
            })
        },
        deletePet(){
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    this.deleting = true;
                    this.deleteText = "Please wait"
                    axios.post(api2+'delete-pet',{
                        petId: this.$route.params.id,
                    })
                    .then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        console.log(data);
                        if(data.status == "ok"){
                            swal.fire({
                                title: "Deleted",
                                text: data.msg,
                                icon: "success",
                            }).then(()=>{
                                this.$router.push({
                                    name: "home.profile"
                                })
                            });
                        } else{
                            swal.fire("Failed",data.msg,"error");
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
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
        updatePet(){
            this.form.post(api2+"update-pet-data")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                if(data.status == "ok"){
                    $('input[type="file"]').val("");
                    swal.fire("Updated",data.msg,"success");
                    this.getPetData();
                    this.editMode = false;
                }
                else{
                    swal.fire("Fail to update", data.msg,"error");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created(){
        this.getPetData();
    }
}
</script>

<style>

</style>