import Vue from "vue";
import VueRouter from "vue-router";
import Central from "../src/components/Central.vue";
import Prueba from "../src/components/Prueba.vue";
import Login from "../src/components/Login.vue";
import Solicitud from "../src/components/Solicitud.vue";
import NavBar from "../src/components/NavBar.vue";
import TodasCervezas from "../src/components/TodasCervezas.vue";
import Vuecard from "../src/components/Vuecard.vue";





Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Central",
        component: Central,
    },
    {
        path: "/Prueba",
        name: "Prueba",
        component: Prueba,
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
        path: "/Navbar",
        name: "Navbar",
        component: NavBar,
    },
    {
        path: "/Cervezas",
        name: "Cervezas",
        component: TodasCervezas,
    },
    {
        path: "/Vuecard",
        name: "Vuecard",
        component: Vuecard,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;