<template>

    <!-- <section id="pricing">
        <div class="section-title">
            <h2>Pricing</h2>
        </div>
        <div class="container section-content pb-5">
            <div class="row justify-content-center" v-if="is_loading">
                <div class="col-md-8">
                    <skeleton width="100%" height="365px"/>
                </div>
            </div>

            <template v-if="!is_loading">
                <div class="package" v-for="(price,i) in pricings" :key="i">
                    <div class="package-content">
                        <div class="package-border"></div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="package-info">
                                    <h2>{{ price.name }}</h2>
                                    <p>{{ price.bio }}</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="package-card">
                                    <div class="package-card-body" v-html="price.desc">

                                    </div>
                                    <div class="package-card-footer">
                                        <a href="/home/reservation" class="rising-btn rising-btn-pink">Make reservation now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

        </div>
    </section> -->

    <!-- Pricing Section -->
    <section class="service" id="pricing">
        <div class="container">
            <div class="seciton-title">
                <h4 class="text-blue">Our Pricing</h4>
                <p>Learn about our pricing and packages</p>
                <img src="/image/title_img.png" alt="">
            </div>
            <div class="section-content">
                <div class="row justify-content-center" v-if="is_loading">
                    <div class="col-md-3 mb-3">
                        <skeleton width="100%" height="365px"/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <skeleton width="100%" height="365px"/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <skeleton width="100%" height="365px"/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <skeleton width="100%" height="365px"/>
                    </div>
                </div>
                <div class="row justify-content-center" v-else>

                    <template v-if="pricings.length > 0">
                        <div class="col-xl-3 col-lg-4 col-md-6" v-for="(price,i) in pricings" :key="i" @click="booking">
                            <div class="price-card">
                                <div class="ribbon"><i class="fas fa-star"></i> {{ price.name }}</div>
                                <div class="body">
                                    <h3 class="text-center text-white">{{ price.bio }}</h3>
                                    <p class="text-center text-white mt-3">{{ price.desc }}</p>
                                </div>
                                <div class="float-btn" title="Book Now">
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </template>


                    <template v-else>
                        <div class="col-md-8">
                            <div class="not-found">
                                <h4>Sorry ! Nothing found in this section !</h4>
                            </div>
                        </div>
                    </template>
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
            pricings: [],
        }
    },
    methods:{
        getPricing(){
            axios.get(api+"get-pricings").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.pricings = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        booking(){
            window.location.href = "/home/reservation";
        }
    },
    created() {
        this.getPricing();
    },
}
</script>

<style>

</style>