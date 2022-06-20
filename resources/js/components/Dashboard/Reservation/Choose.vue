<template>
  <section class="section">
      <div class="container">
          <div class="seciton-title">
                <h4 class="text-blue">Choose booking type</h4>
                <img src="/image/title_img.png" alt="">
            </div>
            <div class="section-content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="choose">
                            <div class="thumb">
                                <img src="/image/boarding.svg" alt="">
                            </div>
                            <h4>BOARDING</h4>
                            <router-link :to="{name: 'reservation.boarding'}" class="res-btn">Start now</router-link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="choose">
                            <div class="thumb">
                                <img src="/image/grooming.svg" alt="">
                            </div>
                            <h4>GROOMING</h4>
                            <router-link :to="{name: 'reservation.grooming'}" class="res-btn">Start now</router-link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </section>
</template>

<script>
export default {
    metaInfo(){
        return{
            title: "Make new reservation"
        }
    },
}
</script>

<style>

</style>