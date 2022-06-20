import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const prefix = "/home/";

import ChooseReservation from"../components/Dashboard/Reservation/Container.vue";

const router = new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPos) {
        if (savedPos) {
            return savedPos;
        } else {
            return { x: 0, y: 0 };
        }
    },
    linkExactActiveClass: "active",
    linkActiveClass: "active",
    routes:[
        // Profile Operations
        {
            path: prefix+"profile",
            name: "home",
            component: ()=>import('../components/Dashboard/Profile/Container.vue'),
            redirect:{
                name: "home.profile"
            },
            children:[
                // Profile
                {
                    path: "/",
                    name: "home.profile",
                    component: () => import('../components/Dashboard/Profile/Index.vue'),
                },
                {
                    path: "edit-profile",
                    name: "home.profile.setting",
                    component: ()=>import("../components/Dashboard/Profile/ProfileEdit.vue")
                },
                // End
                // Pets
                {
                    path: "add-new-pet",
                    name: "home.add-pet",
                    component: ()=>import("../components/Dashboard/Pets/Add.vue")
                },
                {
                    path: "pet-details/:id",
                    name: "home.pet-details",
                    component: ()=>import("../components/Dashboard/Pets/Edit.vue")
                },
            ]
        },
        // ENd

        // Reservation
        {
            path: prefix+"reservation",
            name: "home.reservation",
            component: ChooseReservation,
            redirect:{
                name: "reservation.choose",
            },
            children:[
                {
                    path: "",
                    name: "reservation.choose",
                    component: ()=>import("../components/Dashboard/Reservation/Choose.vue")
                },
                {
                    path: "boarding",
                    name: "reservation.boarding",
                    component: ()=>import("../components/Dashboard/Reservation/Boarding.vue"),
                },
                {
                    path: "grooming",
                    name: "reservation.grooming",
                    component: () => import("../components/Dashboard/Reservation/Grooming.vue"),
                }
            ]
        },
        // End

        // Booking History
        {
            path: prefix+"history",
            name: "booking-history",
            component: ()=>import("../components/Dashboard/History/Container.vue"),
            redirect: {
                name: "booking-history.boarding"
            },
            children: [
                {
                    path: "boarding",
                    name: "booking-history.boarding",
                    component: () => import("../components/Dashboard/History/Boarding.vue")
                },
                {
                    path: "grooming",
                    name: "booking-history.grooming",
                    component: () => import("../components/Dashboard/History/Grooming.vue")
                }
            ]
        },
        // Booking Details
        {
            path: prefix+"booking-details/boarding/:id",
            name: "boarding-details",
            component: ()=>import("../components/Dashboard/BookingDetails/Boarding.vue")
        },
        {
            path: prefix+"booking-details/grooming/:id",
            name: 'grooming-details',
            component: () => import("../components/Dashboard/BookingDetails/Grooming.vue"),
        },


        // End
        {
            path: "*",
            name: "error",
            component: ()=>import("../components/Error/404.vue")
        }
    ]
});

export default router;