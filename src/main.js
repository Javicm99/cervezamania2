import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";
import router from "../routes/routes";
// import VueSimpleAlert from "vue-simple-alert";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");