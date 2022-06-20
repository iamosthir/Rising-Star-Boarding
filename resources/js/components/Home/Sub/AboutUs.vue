<template>
    <section class="about" id="about-us">
        <div class="container">
            <div class="seciton-title">
                <h4 class="text-choco">About Us</h4>
                <img src="/image/title_img.png" alt="">
            </div>
            <div class="section-content">
                <div class="row" v-if="is_loading">
                    <div class="col-md-5 text-center">
                        <skeleton width="350px" height="450px"/>
                    </div>
                    <div class="col-md-7">
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="80%" height="15px"/>
                        <skeleton width="80%" height="15px"/>
                        <skeleton width="70%" height="15px"/>
                        <skeleton width="70%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="90%" height="15px"/>
                        <skeleton width="90%" height="15px"/>
                        <skeleton width="80%" height="15px"/>
                        <skeleton width="60%" height="15px"/>
                        <skeleton width="60%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                        <skeleton width="100%" height="15px"/>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-md-5">
                        <img class="about-img" src="/image/dog-single.png" alt="">
                    </div>
                    <div class="col-md-7">
                        <p class="about-text">
                            {{ aboutText }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End -->
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            aboutText: '',
        }
    },
    methods:{
        getAboutData(){
            axios.get(api+"get-about-us").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.aboutText = data.content;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.reponse.data);
            })
        }
    },
    created() {
        this.getAboutData();
    },
}
</script>

<style>

</style>