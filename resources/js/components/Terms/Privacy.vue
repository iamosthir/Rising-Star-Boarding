<template>
  <section class="section">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <h4 class="term-title" style="font-family: 'Cabin;'">Privacy & Policy</h4>


                  <div class="row mt-5" v-if="is_loading">
                      <div class="col-12">
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="80%" height="15px" />
                          <skeleton width="80%" height="15px" />
                          <skeleton width="70%" height="15px" />
                          <skeleton width="70%" height="15px" />
                          <skeleton width="90%" height="15px" />
                          <skeleton width="90%" height="15px" />
                          <skeleton width="90%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="60%" height="15px" />
                          <skeleton width="60%" height="15px" />
                          <skeleton width="50%" height="15px" />
                          <skeleton width="50%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                          <skeleton width="100%" height="15px" />
                      </div>
                  </div>


                  <div class="mt-5" v-html="content" v-if="!is_loading" style="font-family: 'Cabin' !important;">

                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    metaInfo:{
        title: "Privacy & Policy"
    },
    data(){
        return{
            content: "",
            is_loading: true,
        }
    },
    methods:{
        getTerms(){
            axios.get(api+"get-privacy")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.content = data.content;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created(){
        this.getTerms();
    }
}
</script>

<style>

</style>