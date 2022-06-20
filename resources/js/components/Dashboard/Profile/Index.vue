<template>
<section class="dashboard">
    <div class="cover"></div>
    <div class="content">
            <div class="container">
                <div class="row" v-if="is_loading">
                    <div class="col-md-7">
                        <div class="profile-card">
                            <skeleton width="100%" height="400px"/>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="profile-card">
                            <skeleton width="100%" height="400px"/>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-md-7">
                        <div class="profile-card">
                            <div class="text-end">
                                <router-link :to="{name: 'home.profile.setting'}" class="edit-profile-btn">Edit Profile <i class="fas fa-pen"></i></router-link>
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-5">
                                    <img class="user-thumb" src="/image/user.png" alt="">
                                    <div class="user-basic">
                                        <h4>{{ userName }}</h4>
                                        <p>{{ userEmail }}</p>
                                        <p>{{ profile.cell_phone }}</p>
                                        <p>Address : {{ profile.address1 + " " + profile.address2 }}</p>
                                        <p>Pets - {{ pets.length }}</p>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="user-item">
                                        <h4>City</h4>
                                        <p>{{ profile.city||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>State</h4>
                                        <p>{{ profile.state||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>Zip Code</h4>
                                        <p>{{ profile.zip||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>Home Phone</h4>
                                        <p>{{ profile.home_phone||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>Vet Name</h4>
                                        <p>{{ profile.vet_name||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>Vet number</h4>
                                        <p>{{ profile.vet_number||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>Emergency Person</h4>
                                        <p>{{ profile.emergency_person||'-' }}</p>
                                    </div>
                                    <div class="user-item">
                                        <h4>Emergency Person Contact</h4>
                                        <p>{{ profile.emergency_contact||'-' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 text-center">
                                <router-link :to="{name: 'booking-history'}" class="edit-profile-btn bg-choco"><i class="fas fa-clock"></i> My Bookings</router-link>
                                <router-link :to="{name: 'home.reservation'}" class="edit-profile-btn bg-orange"><i class="fas fa-plus"></i> Start new booking</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="profile-card">
                            <div class="header">
                                <h4>My Pets</h4>
                            </div>

                            <div class="pet-table" v-if="pets.length > 0">
                                <table>
                                    <tr v-for="(pet,i) in pets" :key="i">
                                        <td>
                                            <!-- <img :src="pet.photo!=null?'/uploads/':'/image/dog-placeholder-tall.svg'" class="pet-thumb" alt=""> -->
                                            <img v-if="pet.photo==null" :src="'/image/dog-placeholder-tall.svg'" class="pet-thumb" alt="">
                                            <img v-else :src="cdn+'/uploads/customer/'+profile.id+'/'+pet.photo" class="pet-thumb" alt="">
                                        </td>
                                        <td class="pet-name">{{ pet.name }}</td>
                                        <td>
                                            <router-link :to="{name: 'home.pet-details', params:{id: pet.id}}" class="sm-btn sm-bt-choco">View / Edit</router-link>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="mt-5 mb-5 text-center" v-else>
                                <h4 class="text-choco" style="font-family: 'Bubblegum Sans;'">You have no pets</h4>
                            </div>


                            <div class="text-center mt-5">
                                <router-link :to="{name: 'home.add-pet'}" class="edit-profile-btn"><i class="fas fa-plus"></i> Add pet</router-link>
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
    metaInfo(){
        return{
            title: "Profile - Rising Star Boarding"
        }
    },
    data(){
        return{
            is_loading: true,
            profile: {},
            userName: '',
            customerExists: true,
            pets: [],
            cdn: cdn,
            userEmail : "",
        }
    },
    methods:{
        getProfileData(){
            axios.get(api2+"get-profile-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                this.profile = data.profile;
                this.userName = data.userName;
                this.customerExists = data.customerExists;
                this.pets = data.pets;
                this.userEmail = data.email;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            });
        }
    },
    created(){
        this.getProfileData();
    }
}
</script>

<style>

</style>