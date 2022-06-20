<template>

  <section class="dashboard">
      <div class="cover"></div>
      <div class="content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 mb-4" v-if="welcomeText">
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Welcome, {{ form.last_name }}</strong>  &nbsp; You should complete your profile before making any reservation
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-card">
                            <div class="header d-flex justify-content-between">
                                <h5 class="text-muted">Edit Profile</h5>
                                <div>
                                    <router-link :to="{name: 'home'}" class="btn my-btn" title="Go back"><i class="fas fa-arrow-left"></i></router-link>
                                </div>
                            </div>

                            <div class="body mt-4" v-if="is_loading">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-4 col-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-4 col-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-4 col-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <skeleton width="100%" height="40px" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" v-if="!is_loading">
                                <form @submit.prevent="updateProfileData" class="login-form">
                                    <div class="row">
                                        <div class="col-md-6 group">
                                            <label for="">First name</label>
                                            <input :class="{'is-invalid':form.errors.has('first_name')}" type="text" class="form-control" v-model="form.first_name">
                                            <HasError :form="form" field="first_name" />
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Last name</label>
                                            <input :class="{'is-invalid':form.errors.has('last_name')}" type="text" class="form-control" v-model="form.last_name">
                                            <HasError :form="form" field="last_name" />
                                        </div>
                                        <div class="col-md-12 group">
                                            <label for="">Email</label>
                                            <input :class="{'is-invalid':form.errors.has('email')}" type="email" class="form-control" v-model="form.email">
                                            <HasError :form="form" field="email" />
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Cell phone number</label>
                                            <input :class="{'is-invalid':form.errors.has('cell_phone')}" type="tel" class="form-control" v-model="form.cell_phone">
                                            <HasError :form="form" field="cell_phone" />
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Home Phone</label>
                                            <input type="text" class="form-control" v-model="form.home_phone">
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Address line 1</label>
                                            <textarea :class="{'is-invalid':form.errors.has('address1')}" class="form-control" v-model="form.address1" maxlength="100"></textarea>
                                            <HasError :form="form" field="address1" />
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Address line 2 (Optional)</label>
                                            <textarea class="form-control" v-model="form.address2"></textarea>
                                        </div>
                                        <div class="col-md-4 col-6 group">
                                            <label for="">City</label>
                                            <input :class="{'is-invalid':form.errors.has('city')}" type="text" class="form-control" v-model="form.city">
                                            <HasError :form="form" field="city" />
                                        </div>
                                        <div class="col-md-4 col-6 group">
                                            <label for="">State</label>
                                            <input :class="{'is-invalid':form.errors.has('state')}" type="text" class="form-control" v-model="form.state">
                                            <HasError :form="form" field="state" />
                                        </div>
                                        <div class="col-md-4 col-6 group">
                                            <label for="">Zip Code</label>
                                            <input :class="{'is-invalid':form.errors.has('zip')}" type="text" class="form-control" v-model="form.zip">
                                            <HasError :form="form" field="zip" />
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Vet Name</label>
                                            <input type="text" class="form-control" v-model="form.vetName">
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Vet Number</label>
                                            <input type="text" class="form-control" v-model="form.vetNumber">
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Emergency Person</label>
                                            <input type="text" class="form-control" v-model="form.emergencyPerson">
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Emergency Person Contact</label>
                                            <input type="tel" class="form-control" v-model="form.emergencyContact">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <Button :form="form" class="update-btn">Update</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal animate a-lightSpeed" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" id="popupModal1">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body text-center p-lg">
                                <h1 class="text-success"><i class="fas fa-check-circle"></i></h1>
                                <p>Great ! Profile Updated</p>
                                <h2>Let's add some pets</h2>
                                <div class="mt-4">
                                    <button @click="addPet" type="button" class="rising-btn rising-btn-success mr-2"><i class="fas fa-plus"></i> Add Pets</button>
                                    <button @click="returnHome" type="button" class="rising-btn rising-btn-pink mr-2" data-dismiss="modal"><i class="fas fa-home"></i> Return home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- End -->

        </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            form: new Form({
                first_name: '',
                last_name: "",
                email: "",
                cell_phone: "",
                home_phone: "",
                address1:"",
                address2:"",
                city: "",
                state: "",
                zip: "",
                vetName: "",
                vetNumber: "",
                emergencyPerson: "",
                emergencyContact: "",
            }),
            is_loading: true,
            welcomeText: false,
        }
    },
    metaInfo(){
        return{
            title: "Edit Profile"
        }
    },
    methods:{
        getProfileData(){
            axios.get(api2+"get-profile-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.form.first_name = data.first_name;
                this.form.last_name = data.last_name;
                this.form.email = data.email;
                this.form.cell_phone = data.profile.cell_phone;
                this.form.home_phone = data.profile.home_phone;
                this.form.city = data.profile.city;
                this.form.state = data.profile.state ;
                this.form.zip = data.profile.zip ;
                this.form.vetName = data.profile.vet_name ;
                this.form.vetNumber = data.profile.vet_number ;
                this.form.emergencyPerson = data.profile.emergency_person ;
                this.form.emergencyContact = data.profile.emergency_contact ;
                this.form.address1 = data.profile.address1;
                this.form.address2 = data.profile.address2;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        updateProfileData(){
            this.form.post(api2+"update-profile-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status=="ok"){
                    if(this.welcomeText == true)
                    {
                        $("#popupModal1").modal({
                            backdrop: 'static',
                            keyboard: false
                        });
                        $("#popupModal1").modal("show");
                        
                    }
                    else
                    {
                        swal.fire("Profile updated",data.msg,"success");
                    }

                    this.welcomeText = false;
                    this.remove_hash_from_url();
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        remove_hash_from_url() {
            var uri = window.location.toString();
 
            if (uri.indexOf("#") > 0) {
                var clean_uri = uri.substring(0,
                                uri.indexOf("#"));
 
                window.history.replaceState({},
                        document.title, clean_uri);
            }
        },
        returnHome(){
            $("#popupModal1").modal("hide");
            this.$router.push({
                name: "home.profile"
            });
        },
        addPet(){
            $("#popupModal1").modal("hide");
            this.$router.push({
                name: "home.add-pet"
            });
        }
    },
    mounted(){
        
        $('#popupModal1')
            .on('show.bs.modal', function(e) {
                $(this)
                    .find('[role=document]')
                        .removeClass()
                        .addClass('modal-dialog a-lightSpeed')
        });

        if(window.location.hash == "#welcome")
        {
            this.welcomeText = true;
        }
    },
    created(){
        this.getProfileData();
    },
}
</script>

<style>

</style>