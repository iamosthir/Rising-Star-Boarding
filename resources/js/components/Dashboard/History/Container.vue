<template>
  <section class="section">
      <div class="container">
          <div class="seciton-title">
                <h4 class="text-choco">My Bookings</h4>
                <img src="/image/title_img.png" alt="">
            </div>
            <div class="section-content">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="booking-history">
                            <div class="header">
                                <router-link :to="{name: 'booking-history.boarding'}"><i class="fas fa-paw"></i> Boarding</router-link>
                                <router-link :to="{name: 'booking-history.grooming'}"><i class="fas fa-paw"></i> Grooming</router-link>
                            </div>
                            <div class="content">
                                <router-view></router-view>
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

}
</script>

<style>

</style>