import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
    routes:[
        {
            path: "/",
            name: "index",
            component: ()=>import("../components/Home/Home.vue")
        },
        // Login
        {
            path: "/login",
            name: "login",
            component: ()=>import("../components/Login/Login.vue"),
        },
        // End
        {
            path: "/register",
            name: "register",
            component: ()=>import("../components/Login/Register.vue")
        },
        {
            path: "/terms-and-conditions",
            name: "terms",
            component: ()=>import("../components/Terms/Terms.vue")
        },
        {
            path: "/privacy-and-policy",
            name: "privacy",
            component: ()=>import("../components/Terms/Privacy.vue")
        },
        {
            path: "/contact-us",
            name: "contact-us",
            component: ()=>import("../components/Contact/Index.vue")
        },
        {
            path: "*",
            name: "error",
            component: () => import("../components/Error/404.vue")
        }
    ]
});

export default router;