<template>
  <section class="login">
      <div class="container">
        <div class="seciton-title">
            <h4 class="text-choco">Register new account</h4>
            <p>Get your free account today and start using our booking services</p>
            <img src="img/title_img.png" alt="">
        </div>

          <div class="row justify-content-center mt-5 pb-5">
              <div class="col-md-8">
                  <div class="login-card">
                      <div class="login-card-body">
                          <form @submit.prevent="register" class="login-form">
                              <div class="row">
                                  <div class="col-md-6 group">
                                      <label for="">First name <span class="text-danger">*</span></label>
                                      <input :class="{'is-invalid' : form.errors.has('first_name')}" type="text" maxlength="20" 
                                      placeholder="First name..." v-model="form.first_name">
                                      <HasError :form="form" field="first_name" />
                                  </div>
                                  <div class="col-md-6 group">
                                      <label for="">Last name <span class="text-danger">*</span></label>
                                      <input :class="{'is-invalid' : form.errors.has('last_name')}" type="text" class="form-control" maxlength="20" 
                                      placeholder="Last name..." v-model="form.last_name">
                                      <HasError :form="form" field="last_name" />
                                  </div>
                                  <div class="col-md-12 group">
                                      <label for="">Email <span class="text-danger">*</span></label>
                                      <input :class="{'is-invalid' : form.errors.has('email')}" type="email" 
                                      class="form-control" placeholder="Email..." v-model="form.email">
                                      <HasError :form="form" field="email" />
                                  </div>
                                  <div class="col-md-6 group">
                                      <label for="">Password <span class="text-danger">*</span></label>
                                      <input :class="{'is-invalid' : form.errors.has('password')}" type="password" class="form-control"
                                       placeholder="Choose a strong password" v-model="form.password">
                                      <HasError :form="form" field="password" />
                                  </div>
                                  <div class="col-md-6 group">
                                      <label for="">Confirm Password <span class="text-danger">*</span></label>
                                      <input type="password" class="form-control" placeholder="Confirm your password" v-model="form.password_confirmation">
                                  </div>
                                  <div class="col-md-12 group">
                                      <input type="checkbox" id="terms" required>
                                      <label for="terms"> &nbsp;I accept the <router-link target="_blank" :to="{name: 'terms'}">Terms & Conditions</router-link></label>
                                  </div>
                                  <div class="col-md-12 group">
                                      <Button :form="form" class="login-btn btn-choco">Register</Button>
                                  </div>
                                  <div class="col-md-12 mt-4" v-if="registerStatus">
                                      <div class="alert alert-success" role="alert" v-if="registerStatus=='ok'" style="font-family: 'Bubblegum Sans;'">
                                          <i class="fas fa-check"></i> Registration is successful. Please wait...
                                      </div>
                                      <div class="alert alert-danger" role="alert" v-else-if="registerStatus=='fail'" style="font-family: 'Bubblegum Sans;'">
                                          <i class="fas fa-check"></i> Failed to register new account.
                                      </div>
                                  </div>
                                  <div class="group text-center">
                                      <p style="font-size: 20px; font-family: 'Cabin';">Already have an account ?</p>
                                  </div>
                                  <div class="col-md-12 group">
                                    <router-link :to="{name: 'login'}" class="btn-blue login-btn mt-4">Login</router-link>
                                  </div>
                              </div>
                          </form>
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
            form: new Form({
                email: '',
                password: '',
                first_name: '',
                last_name: '',
                password_confrimation: ''
            }),
            registerStatus : "",
        }
    },
    metaInfo(){
        return{
            title: "Register - Rising Star Boarding"
        }
    },
    methods:{
        register(){
            this.form.post('/cutomer-registration').then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.registerStatus = "ok";
                    setTimeout(()=>{
                        window.location.href="/home/profile/edit-profile#welcome";
                    },2000)
                }
                else{
                    this.registerStatus = "fail";
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    }
}
</script>

<style>

</style>