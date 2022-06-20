<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-md-8" v-if="is_loading">
          <skeleton width="100%" height="500px" />
        </div>

        <template v-if="!is_loading && !groomingStatus">
          <div class="col-md-12">
              <div class="service-off">
                  <img src="/image/puppy.png" alt="">
                  <h6>Our grooming service is temporarily closed.</h6>
                  <p>We will get back to service soon</p>
              </div>
          </div>
        </template>

        <template v-else>
          <div class="col-md-4" v-if="!is_loading && status == 'denied'">
            <div class="complete-profile-box text-center">
              <h4 class="text-muted mb-5">
                Complete your profile before making reservation
              </h4>
              <router-link :to="{ name: 'home.profile.setting' }" class="btn btn-primary"
                >Profile Settings</router-link
              >
            </div>
          </div>

          <div class="col-md-4" v-else-if="!is_loading && petCount == 0">
            <div class="complete-profile-box text-center">
              <h4 class="text-muted mb-5">
                You Haven't added any pet. Add some pets before making any booking
              </h4>
              <router-link
                :to="{ name: 'home.add-pet' }"
                class="rising-btn rising-btn-success"
                >Add Pets <i class="fas fa-plus"></i
              ></router-link>
            </div>
          </div>
          <div class="col-md-8" v-if="!is_loading && status == 'completed' && petCount > 0">
            <div class="mb-5">
              <button @click="$router.go(-1)" class="btn-back">
                <i class="fas fa-arrow-left"></i> Go back
              </button>
            </div>
            <div class="d-flex justify-content-between">
              <h4
                class="text-blue"
                style="
                  font-family: 'Bubblegum Sans';
                  border-bottom: 2px solid var(--blue);
                  padding-bottom: 15px;
                "
              >
                <i class="fas fa-paw"></i> Grooming
              </h4>
            </div>
            <div class="mt-5">
              <form @submit.prevent="submitOrder" class="grooming-form">
                <div class="row">
                  <div class="col-md-12 group">
                    <label for="">Select Your Pets</label>
                    <multiselect
                      v-model="form.petValues"
                      :tagable="true"
                      :multiple="true"
                      :close-on-select="false"
                      @tag="addTag"
                      track-by="id"
                      label="name"
                      placeholder="Select Pets"
                      :options="pets"
                      class="mt-3"
                    />
                    <HasError :form="form" field="petValues" />
                  </div>
                  <div class="col-md-8 group">
                    <date-range-picker
                      ref="picker"
                      single-date-picker="single"
                      :date-format="dateFormat"
                      v-model="appoinmentDate"
                    >
                      <template v-slot:input="">
                        <div class="group">
                          <label for="">Appointment Date</label>
                          <input
                            @keydown="
                              $event.preventDefault();
                              return false;
                            "
                            type="text"
                            class="date-input custom-input"
                            :class="{ 'is-invalid': form.errors.has('dateTime') }"
                            :value="
                              appoinmentDate.startDate == ''
                                ? ''
                                : moment(appoinmentDate.startDate).format(
                                    'D MMMM YYYY'
                                  )
                            "
                            placeholder="Select your appointment date and time"
                          />
                        </div>
                      </template>
                    </date-range-picker>
                    <HasError :form="form" field="dateTime" />
                  </div>

                  <div class="group col-md-4">
                    <label for="">Appointment time</label>
                    <select
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('time') }"
                      v-model="form.time"
                    >
                      <option value="" hidden>Select time</option>
                      <optgroup label="8:00 am - 11:00 am">
                        <option v-for="(time, t) in time1" :key="t" :value="time">
                          {{ time }}
                        </option>
                      </optgroup>
                    </select>
                    <HasError :form="form" field="time" />
                  </div>

                  <div class="col-md-12 group">
                    <label for="">Note</label>
                    <textarea
                      class="form-control"
                      placeholder="Optional..."
                      style="height: 250px"
                      v-model="form.note"
                    ></textarea>
                  </div>
                  <div class="col-md-12 mb-3">
                    <Button :form="form" class="booking-btn">Confirm Booking</Button>
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
import Multiselect from "vue-multiselect";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  components: {
    DateRangePicker,
    Multiselect,
  },
  data() {
    return {
      status: "",
      is_loading: true,
      pets: [],
      moment: moment,
      appoinmentDate: {
        startDate: "",
        endDate: "",
      },
      form: new Form({
        petValues: null,
        dateTime: null,
        note: "",
        time: "",
      }),
      petCount: 0,
      time1: [],
      groomingStatus: false,
    };
  },
  metaInfo() {
    return {
      title: "Grooming - Rising Star Boarding",
    };
  },
  methods: {
    isProfileCompleted() {
      axios
        .get(api2 + "profile-check")
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          this.status = data.status;
          this.petCount = data.petCount;
          this.groomingStatus = data.serviceStatus.grooming_status=='true'?true:false;
          this.is_loading = false;
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    },
    getPets() {
      axios
        .get(api2 + "get-pet-list")
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          if (data.status == "ok") {
            this.pets = data.pets;
          }
        });
    },
    submitOrder() {
      this.form.dateTime = moment(this.appoinmentDate.startDate).format(
        "YYYY-MM-D hh:mm:ss"
      );
      this.form
        .post(api2 + "submit-grooming-order")
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          if (data.status == "ok") {
            swal.fire("Booking Successfull", data.msg, "success");
            this.$router.push({
              name: "home",
            });
          } else {
            swal.fire(
              "Failed",
              "We couldn't process your request at this moment. Please try again later"
            );
          }
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    },

    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.pets.push(tag);
      this.form.petValues.push(tag);
    },
    dateFormat(classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date();
      }
      return classes;
    },
    timeSlot1() {
      let start = moment("8:00am", "h:mma");
      let end = moment("11:00am", "h:mma");

      while (start <= end) {
        this.time1.push(start.format("h:mm A"));
        start.add(30, "minutes");
      }
    },
  },
  created() {
    this.isProfileCompleted();
    this.getPets();
    this.timeSlot1();
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.reportrange-text[data-v-4391f606] {
  border: 1px solid #f2eee5 !important;
}
</style>
