require('./bootstrap');

import Vue from "vue";

// Vue meta
import VueMeta from "vue-meta";
Vue.use(VueMeta);
// End

// Moment
import moment from "moment";
window.moment = moment;
// End

// Sweet Alert
import swal from "sweetalert2";
window.swal = swal;
// End

window.api = "/api/v1/";
window.api2 = "/home/api/"
window.cdn = process.env.MIX_ADMIN_HOST;

// Vue Router
import Router from "./routes/index";
import DashboardRouter from "./routes/dashboard";
// End

// Skeleton
Vue.component("skeleton", require("./components/partials/CustomSkeleton.vue").default);
// end

// Pagination
Vue.component('pagination', require('laravel-vue-pagination'));
// End

// V form
import Form from 'vform';
import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
} from 'vform/src/components/bootstrap5';

Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)
// End

window.Form = Form;

// Progress bar
import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
    color: 'rgb(75, 28, 14)',
    failedColor: 'red',
    thickness: '5px'
});
// End

Router.beforeEach((to, from, next) => {
    Vue.prototype.$Progress.start();
    next();
});

Router.afterEach(() => {
    Vue.prototype.$Progress.finish();
});

DashboardRouter.beforeEach((to, from, next) => {
    Vue.prototype.$Progress.start();
    next();
});

DashboardRouter.afterEach(() => {
    Vue.prototype.$Progress.finish();
});

if(document.getElementById("app")){
    const app = new Vue({
        el: '#app',
        router: Router,
    });
}


if(document.getElementById("dashboard")){
    const app = new Vue({
        el: '#dashboard',
        router: DashboardRouter
    });
}
