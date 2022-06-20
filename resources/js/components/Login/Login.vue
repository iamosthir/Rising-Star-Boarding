<template>
  <!-- <section id="login">
      <div class="container">
          <div class="row justify-content-center mt-5 pb-5">
              <div class="col-md-6">
                  <div class="login-card">
                      <h4>Login</h4>
                      <div class="login-card-body pb-4">
                          <form @submit.prevent="login">
                              <div class="form-group mt-4 my-form">
                                  <label for="">Email</label>
                                  <input class="form-control" :class="{'is-invalid' : form.errors.has('email')}" type="email" 
                                  name="email" placeholder="Your email address..." v-model="form.email">
                                  <HasError :form="form" field="email" />
                              </div>
                              <div class="form-group mt-4 my-form">
                                  <label for="">Password</label>
                                  <input class="form-control" :class="{'is-invalid' : form.errors.has('password')}" type="password" 
                                  name="password" placeholder="Your password..." v-model="form.password">
                                  <HasError :form="form" field="password" />
                              </div>
                              <div class="form-group mt-4 d-flex justify-content-between">
                                  
                                  <label for="remember"><input id="remember" type="checkbox" v-model="form.remember"> Remember me</label>
                                  <a href="/password/reset">Forgot your password?</a>
                              </div>
                              <div class="form-group mt-4">
                                  <Button :form="form" class="rising-btn rising-btn-pink">Login</Button>
                              </div>
                              <div class="form-group mt-4" v-if="loginFailed">
                                  <div class="alert alert-danger" role="alert">
                                      Invalid email or password !
                                  </div>
                              </div>
                              <div class="form-group mt-4 text-center">
                                  <p class="text-muted mt-3">Don't have an account ?</p>
                                  <router-link :to="{name: 'register'}" class="rising-btn rising-btn-white mt-4">Create new account</router-link>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> -->
<!-- Gallery Items-->
    <section class="login">
        <div class="container">
            <div class="seciton-title">
                <h4 class="text-choco">Login</h4>
                <p>Login to start using our online booking services</p>
                <img src="img/title_img.png" alt="">
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form class="login-form" @submit.prevent="login">
                        <div class="group">
                            <label for="">Email</label>
                            <input :class="{'is-invalid' : form.errors.has('email')}" type="email" placeholder="Your valid email address..." v-model="form.email">
                            <HasError :form="form" field="email" />
                        </div>
                        <div class="group">
                            <label for="">Password</label>
                            <input type="password" placeholder="Your valid email address..." :class="{'is-invalid' : form.errors.has('password')}" v-model="form.password">
                            <HasError :form="form" field="password" />
                        </div>
                        <div class="group d-flex justify-content-between">
                            <div>
                                <input type="checkbox" id="remember" v-model="form.remember">
                                <label for="remember" class="remember">Remember me</label>
                            </div>
                            <div>
                                <a class="forgot-pass" href="/password/reset">Forgot password?</a>
                            </div>
                        </div>
                        <div class="group">
                            <Button :form="form" class="login-btn btn-blue">Login</Button>
                        </div>
                        <div class="group" v-if="loginFailed">
                            <div class="alert alert-danger" role="alert" style="font-family: 'Bubblegum Sans'">
                                Invalid email or password !
                            </div>
                        </div>
                        <div class="group text-center">
                            <p style="font-size: 20px; font-family: 'Cabin';">Don't have an account ?</p>
                        </div>
                        <div class="group">
                            <router-link :to="{name: 'register'}" class="login-btn btn-choco">Create new account</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End -->
</template>

<script>
export default {
    metaInfo(){
        return{
            title: "Login - Rising Star Boarding"
        }
    },
    data(){
        return{
            form: new Form({
                email: '',
                password: '',
                remember: false,
            }),
            loginFailed: false,
        }
    },
    methods:{
        login(){
            this.form.post("/custom-login").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "fail"){
                    this.loginFailed = true;
                }
                else if(data.status == "ok"){
                    window.location.href="/home";
                }
            })
            .catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    mounted(){

    },
}
</script>

<style>

</style>