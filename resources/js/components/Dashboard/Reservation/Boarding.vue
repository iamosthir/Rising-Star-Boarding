<template>
  <section class="section">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8" v-if="is_loading">
                  <skeleton width="100%" height="500px" />
              </div>

              <template v-if="!is_loading && !boardingStatus">
                  <div class="col-md-12">
                      <div class="service-off">
                          <img src="/image/puppy.png" alt="">
                          <h6>Our boarding service is temporarily closed.</h6>
                          <p>We will get back to service soon</p>
                      </div>
                  </div>
              </template>

              <template v-else>
                <div class="col-md-4" v-if="!is_loading && status =='denied'">
                    <div class="complete-profile-box text-center">
                        <h4 class="text-muted mb-5">Complete your profile before making reservation</h4>
                        <router-link :to="{name: 'home.profile.setting'}" class="rising-btn rising-btn-white">Profile Settings</router-link>
                    </div>
                </div>
                <div class="col-md-4" v-else-if="!is_loading && petCount ==0">
                    <div class="complete-profile-box text-center">
                        <h4 class="text-muted mb-5 mt-5" style="font-family: 'Bubblegum Sans;'">You Haven't added any pet. <br> Add some pets before making any booking</h4>
                        <router-link :to="{name: 'home.add-pet'}" class="edit-profile-btn">Add Pets <i class="fas fa-plus"></i></router-link>
                    </div>
                </div>
                <div class="col-md-12" v-if="!is_loading && status =='completed' && petCount > 0">
                    <div class="mb-5">
                        <button @click="$router.go(-1)" class="btn-back"><i class="fas fa-arrow-left"></i> Go back</button>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h4 class="text-blue" style="font-family: 'Bubblegum Sans';border-bottom: 2px solid var(--blue); padding-bottom: 15px"><i class="fas fa-paw"></i> Boarding</h4>
                    </div>
                    <p style="font-size: 16px; color: var(--choco); margin-bottom: 25px;font-family: 'Bubblegum Sans';">Total {{ totalDays }} Days</p>
                    <div class="mt-5">
                        <form @submit.prevent="submitOrder" class="login-form">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-10 group">
                                            <date-range-picker
                                                    ref="picker"
                                                    single-date-picker="range"
                                                    v-model="dateRange"
                                                    :date-format="dateFormat">
                                                    <template v-slot:input="picker">
                                                        <div class="my-form mb-3">
                                                            <label for="">Select Your Booking Range 
                                                                <small class="text-danger" style="font-family: 'Cabin';font-size: 16px;">* (Note : You must pick up your dogs on <strong>{{ pickupDate }}</strong> Morning)</small></label>
                                                            <input  @keydown="$event.preventDefault();return false;" type="text"
                                                            class="form-control date-input" :value="moment(picker.startDate).format('D MMMM YYYY')+' - '+moment(picker.endDate).format('D MMMM YYYY')"
                                                            :class="{
                                                                'is-invalid' : form.errors.has('startDate'),
                                                                'is-invalid' : form.errors.has('endDate')
                                                            }"
                                                            >
                                                        </div>
                                                    </template>
                                            </date-range-picker>
                                        </div>
                                        <div class="col-md-12 group">
                                            <label for="">Select the number of kennels</label>
                                            <select class="form-control" v-model="form.requestedKennel">
                                                <option value="1 Kennel with 1 dog">1 Kennel with 1 dog</option>
                                                <option value="1 Kennel with 2 dog">1 Kennel with 2 dog</option>
                                                <option value="1 Kennel with 3 dog">1 Kennel with 3 dog</option>
                                                <option value="2 Kennel with 1 dog each">2 Kennel with 1 dog each</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Set Drop Off time</label>
                                            <select class="form-control" v-model="form.dropTime" :class="{'is-invalid': form.errors.has('dropTime')}">
                                                <option value="" hidden>Select Time</option>
                                                <optgroup label="8:00 AM to 10:00 AM">
                                                    <option v-for="(time,i) in time1" :key="i" :value="time">{{ time }}</option>
                                                </optgroup>
                                                <optgroup label="4:00 PM to 7:00 PM">
                                                    <option v-for="(time,i) in time2" :key="i" :value="time">{{ time }}</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div class="col-md-6 group">
                                            <label for="">Set pick up time</label>
                                            <select class="form-control" v-model="form.pickTime" :class="{'is-invalid': form.errors.has('pickTime')}">
                                                <option value="" hidden>Select Time</option>
                                                <optgroup label="8:00 AM to 10:00 AM">
                                                    <option v-for="(time,i) in time1" :key="i" :value="time">{{ time }}</option>
                                                </optgroup>
                                                <optgroup label="4:00 PM to 7:00 PM">
                                                    <option v-for="(time,i) in time2" :key="i" :value="time">{{ time }}</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div class="col-md-8 group">
                                            <label for="">Special Note/Suggestion</label>
                                            <textarea class="form-control" style="height: 80px !important;" placeholder="Write here..." v-model="form.note"></textarea>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <p style="font-family: 'Cabin'; font-size: 25px; color: var(--blue);border-bottom: 2px solid var(--blue); padding-bottom: 15px"><b><i class="fas fa-paw"></i> Select your pets</b></p>
                                    <fieldset class="new-dog-entry" v-for="(dog,i) in form.dogs" :key="i">
                                        <legend class="d-flex justify-content-between">
                                            <span class="mb-3" style="font-family: 'Bubblegum Sans;'">Dog {{ i+1 }}</span>
                                            <button @click="removeDogField(i)" v-if="i>0" class="btn my-btn" title="Remove"><i class="fas fa-trash"></i></button>
                                        </legend>
                                        <div class="row mt-4">
                                            <div class="col-md-12 group">
                                                <label for="">Select Your Pet</label>
                                                <select class="form-control" v-model="form.dogs[i].dog_id">
                                                    <option value="" hidden>Select your pet</option>
                                                    <template v-for="(pet,n) in pets">
                                                    <option :value="pet.id" :key="n" :disabled="form.dogs[i==0?0:i-1].dog_id == pet.id?true:false">{{ pet.name }}</option>
                                                    </template>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <button v-if="pets.length > 1 && pets.length != form.dogs.length" 
                                                @click="addDogField" type="button" class="edit-profile-btn"><i class="fas fa-plus"></i> Add another</button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-12 mb-3">
                                    <Button class="booking-btn" :form="form" type="submit">Confirm Booking <i class="fas fa-arrow-right"></i></Button>
                                </div>
                                    <div class="col-md-12 mb-3" v-if="petNotSelectedError">
                                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <strong>Warning!</strong> You should select at least one of your Pets.
                                            <button @click="petNotSelectedError=false;" type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-md-12 mb-3">
                                        <AlertErrors :form="form"/>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
              </template>

          </div>
      </div>
  </section>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
export default {
    components:{
        DateRangePicker,
    },
    data(){
        return{
            status: '',
            is_loading: true,
            dateShow: false,
            pets:[],
            dateRange: {
                startDate: new Date(),
                endDate: new Date()
            },
            form: new Form({
                startDate: '',
                endDate: '',
                dogs: [
                    {
                        dog_id: ""
                    }
                ],
                requestedKennel: "1 Kennel with 1 dog",
                pickTime: "",
                dropTime: "",
                note: "",
            }),
            moment: moment,
            kennels: [],
            lodingKennels: true,
            priceData:{},
            petNotSelectedError: false,
            petCount: 0,
            time1: [],
            time2: [],
            boardingStatus: false,
        }
    },
    metaInfo(){
        return{
            title: "Boarding - Rising Star Boarding"
        }
    },
    methods:{

        isProfileCompleted(){
            axios.get(api2+"profile-check").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.status = data.status;
                this.petCount = data.petCount;
                this.boardingStatus = data.serviceStatus.boarding_status=='true'?true:false;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        addDogField(){
            this.form.dogs.push({
                dog_id: ""
            });
        },
        removeDogField(index){
            this.form.dogs.splice(index,1);
        },
        getPets(){
            axios.get(api2+"get-pet-list")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.pets = data.pets;
                }
            });
        },
        submitOrder(){

            this.form.dogs.forEach((item,i)=>{
                if(item.dog_id == "")
                {
                    if(i != 0){
                        this.form.dogs.splice(i,1);
                    }
                }
            });

            if(this.form.dogs[0].dog_id == "")
            {
                this.petNotSelectedError = true;
            }
            else
            {
                this.petNotSelectedError = false;
                this.form.startDate = this.moment(this.dateRange.startDate).format("Y-M-D");
                this.form.endDate = this.moment(this.dateRange.endDate).format("Y-M-D");
                this.form.post(api2+"submit-boarding-booking")
                .then(resp=>{
                    return resp.data;
                }).then(data=>{
                    if(data.status == "ok")
                    {
                        swal.fire({
                            title: "Booking submitted",
                            text: data.msg,
                            icon: "success",
                        }).then(()=>{
                            this.$router.push({
                                name: "boarding-details",
                                params: {
                                    id: data.boardingId,
                                }
                            });
                        });
                    }
                    else
                    {
                        swal.fire("Failed to process your request", "We were unable to process your request due to an internal server error. Please try again lates","error");
                    }
                }).catch(err=>{
                    console.error(err.response.data);
                });
            }
        },
        dateFormat (classes, date) {
            if (!classes.disabled) {
                classes.disabled = date.getTime() < new Date()
            }
            return classes;
        },
        timeSlot1(){
            let start = moment("8:00am", "h:mma");
            let end = moment("10:00am", "h:mma");

            while(start <= end){
                this.time1.push(start.format("h:mm A"));
                start.add(15,'minutes');
            }
        },
        timeSlot2(){
            let start = moment("4:00pm", "h:mma");
            let end = moment("7:00pm", "h:mma");

            while(start <= end){
                this.time2.push(start.format("h:mm A"));
                start.add(15,'minutes');
            }
        },
        
    },
    created(){
        this.isProfileCompleted();
        this.getPets();
    },
    computed:{
        totalDays(){
            let start = moment(this.dateRange.startDate);
            let end = moment(this.dateRange.endDate);
            return end.diff(start,"days")+1;
        },
        pickupDate(){
            return moment(this.dateRange.endDate).add(1,'days').format("Do MMMM");
        },
    },
    mounted(){
        this.timeSlot1();
        this.timeSlot2();
    }
}
</script>

<style>

</style>