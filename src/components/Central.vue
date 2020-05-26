<template>
  <div class="all">
    <Cabecera></Cabecera>
    <nav>
      <NavBar></NavBar>
    </nav>
    <div>
      <BarraIzq></BarraIzq>
    </div>

    <div>
      <BarraDer></BarraDer>
    </div>
    <div class="container-fluid seccionCentral">
      <form>
        <div class="form-row centrado">
          <div class="form-group col-md-6">
            <input type="text" class="form-control" id="inputBuscador" />
          </div>
        </div>
      </form>
      <div class="centrado">
        <button id="buscar" style="font-size:24px">
          Buscar
          <img class="imagenCerve" src="../beer.svg" />
        </button>
      </div>

      <div id="divResultados">
        <div class="titulocentrado">
          <h1>Nombre del local/cerveza buscado</h1>
        </div>
        <div class="resultadosBusqueda centrado">
          <div id="resultadosBusqueda" class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action flex-column align-items-start resultado"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Nombre resultado</h5>
                <span class="separador"></span>
                <small>
                  Valoración
                  <i class="fa fa-star"></i>
                </small>
              </div>
              <p class="mb-1">Descripción resultado</p>
              <small class="masomenos">Click para mas información</small>
              <div class="infoExtra"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-bottom-navigation :value="activeBtn" color="purple lighten-1">
        <v-btn>
          <span>
            <router-link to="https://www.google.es/maps">Cervezas cercanas</router-link>
          </span>
          <link />
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <div>
      <Footer></Footer>
    </div>
    <router-view />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BarraIzq from "@/components/BarraIzq.vue";
import BarraDer from "@/components/BarraDer.vue";
import Cabecera from "@/components/Cabecera.vue";
import Footer from "@/components/Footer.vue";

//import Login from "@/components/Login.vue";

export default {
  name: "Central",
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-twitter"],

    activeBtn: 1
  }),
  props: {},
  components: {
    BarraIzq,
    BarraDer,
    NavBar,
    Cabecera,
    Footer
  },
  methods: {},
  mounted() {}
};
</script>

<style>
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #041d61;
}

::-webkit-scrollbar-thumb {
  background-color: #3168af;
  border-radius: 15px;

  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
/* ::-webkit-scrollbar-thumb:hover { */
/* background-color:green; */
/* } */

.all {
  background-color: rgb(54, 53, 53);
  color: white;
}

.centrado {
  display: flex;
  justify-content: center;
}

.alert {
  background-color: red;
  color: white;
}

#buscar {
  border: solid purple;
  border-radius: 10px;
  background-color: white;
  color: black;
  padding: 5px;
}

.botonhover {
  background-color: #e7e7e7;
  cursor: wait;
}

.infoExtra {
  display: none;
}
.mostrar {
  display: block;
}

.separador {
  width: 650px;
}

.superior {
  height: 250px;
  width: 1906px;
  background-image: url("../logo/fondoDefinitivo2.jpg");
}

.logo {
  width: 12%;
  height: 200px;
  padding-left: 25px;
  padding-top: 25px;
  float: left;
}

.titulo {
  width: 44%;
  height: 100px;
  padding-left: 15%;
  padding-bottom: 15%;
  border: #e7e7e7;
  float: left;
}

.seccionCentral {
  width: 50% !important;
  background-color: rgb(250, 192, 66);
  padding: 20px;
  border-radius: 8px;
  margin-top: 50px;
}

.imagenCerve {
  height: 50px;
  width: 50px;
}

.botonElegir {
  margin-left: auto;
}
#enviar {
  color: #041d61;
  padding: 5px;
}
#inputBuscador {
}
</style>
