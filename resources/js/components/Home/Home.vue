<template>
  <div class="home">
      <banner/>
      <about/>
      <choose/>
      <pricing/>
  </div>
</template>

<script>
import Banner from "../Home/Sub/Banner.vue";
import About from "../Home/Sub/AboutUs.vue";
import Pricing from "../Home/Sub/Pricing.vue";
import Choose from "../Home/Sub/Choose.vue";
export default {
    components:{
        "banner": Banner,
        "about": About,
        "pricing": Pricing,
        "choose": Choose,
    },
    metaInfo(){
        return{
            title: "Home - Rising Star Boarding"
        }
    },
    mounted(){
        setTimeout(function(){
            let hash = window.location.hash;
            if(hash == "#about-us"){
                $("html,body").animate({
                    scrollTop: $("#about-us").offset().top+10,
                },600);
                $('a[data-nav-custom="about"]').addClass("active");
            }
            else if(hash == "#pricing"){
                $("html,body").animate({
                    scrollTop: $("#pricing").offset().top+250,
                },600);
                $('a[data-nav-custom="pricing"]').addClass("active");
            }

        },600);
    }
}
</script>

<style>

</style>