import Vue from "vue";
import VueRouter from "vue-router";
import Central from "../src/components/Central.vue";
import Login from "../src/components/Login.vue";
import Solicitud from "../src/components/Solicitud.vue";
import Cervezas from "../src/components/Cervezas.vue";
import Vuecard from "../src/components/Vuecard.vue";
import SobreNosotros from "../src/components/SobreNosotros.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Central",
        component: Central
    },

    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Solicitud",
        name: "Solicitud",
        component: Solicitud,
    },

    {
        path: "/Cervezas",
        name: "Cervezas",
        component: Cervezas,
    },
    {
        path: "/Vuecard",
        name: "Vuecard",
        component: Vuecard,
    },
    {
        path: "/SobreNosotros",
        name: "SobreNosotros",
        component: SobreNosotros,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;