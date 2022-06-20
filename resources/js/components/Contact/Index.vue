<template>
  <section class="section">
      <div class="container">
        <div class="seciton-title">
          <h4 class="text-blue">Contact Us</h4>
          <img src="/image/title_img.png" alt="">
        </div>

          <div class="section-content">
              <div class="row justify-content-center mt-5">
                <div class="col-12">
                    <iframe v-if="!is_loading && contact.lat && contact.lng"
                        width="100%"
                        height="450"
                        loading="lazy"
                        class="map-iframe"
                        allowfullscreen
                        :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyA5m6020IXSvsDrZFPnViyCpthJVqpGOkw
                            &q=${contact.lat},${contact.lng}`">
                        </iframe>
                        <skeleton v-if="is_loading" width="100%" height="450px"/>
                </div>
                <template v-if="!is_loading">
                    <div class="col-md-3 mt-5 text-center" title="Get Direction">
                        <div class="contact-card" @click="openMap(contact.lat,contact.lng)">
                            <h1 class="text-blue"><i class="fas fa-map-marker-alt"></i></h1>
                            <h4 class="text-choco"><b>Address</b></h4>
                            <p class="mt-3">{{ contact.address }}</p>
                        </div>
                    </div>
                    <div class="col-md-3 mt-5 text-center" title="Call to number">
                        <div class="contact-card" @click="callToPhone(contact.mobile)">
                                <h1 class="text-blue"><i class="fas fa-phone"></i></h1>
                                <h4 class="text-choco"><b>Contact Number</b></h4>
                                <p class="mt-3">{{ contact.mobile }}</p>
                        </div>
                    </div>
                    <div class="col-md-3 mt-5 text-center" title="Send email">
                        <div class="contact-card" @click="sendMail(contact.email)">
                                <h1 class="text-blue"><i class="fas fa-envelope"></i></h1>
                                <h4 class="text-choco"><b>Email</b></h4>
                                <p class="mt-3">{{ contact.email }}</p>
                        </div>
                    </div>
                </template>

                <template v-if="is_loading">
                    <div class="col-md-3 mt-5">
                        <skeleton width="100%" height="200px"/>
                    </div>
                    <div class="col-md-3 mt-5">
                        <skeleton width="100%" height="200px"/>
                    </div>
                    <div class="col-md-3 mt-5">
                        <skeleton width="100%" height="200px"/>
                    </div>
                </template>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            contact: {},
            is_loading: true,
        }
    },
    metaInfo(){
        return{
            title: "Contact Us"
        }
    },
    methods:{
        getContactData(){
            axios.get("/api/v1/get-contact-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.contact = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        openMap(lat,lng){
            window.open(`https://www.google.com/maps/embed/v1/place?key=AIzaSyA5m6020IXSvsDrZFPnViyCpthJVqpGOkw
                        &q=${lat},${lng}`,"_blank")
        },
        callToPhone(mobile){
            window.open(`tel:${mobile}`);
        },
        sendMail(email){
            window.open(`mailto:${email}`);
        }
    },
    created(){
        this.getContactData();
    }
}
</script>

<style>

</style>