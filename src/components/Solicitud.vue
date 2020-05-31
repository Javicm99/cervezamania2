<template>
  <v-responsive>
    <div id="solicitud">
      <Cabecera></Cabecera>
      <NavBar></NavBar>
      <v-row id="row">
        <v-form id="formu" ref="form" v-model="valid">
          <h1>Solicitud de Cerveza</h1>
          <v-text-field v-model="local" :rules="localRules" label="Local" required></v-text-field>

          <v-text-field v-model="cerveza" :rules="cervezaRules" label="Cerveza" required></v-text-field>

          <v-text-field label="Descripción"></v-text-field>

          <v-btn color="error" class="mr-4" @click="reset">Resetear Campos</v-btn>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Enviar</v-btn>
        </v-form>
      </v-row>

      <Footer></Footer>
    </div>
  </v-responsive>
</template>

<script>
export default {
  name: "Solicitud",
  data: () => ({
    valid: true,
    local: "",
    localRules: [v => !!v || "El campo local es requerido"],
    cerveza: "",
    cervezaRules: [v => !!v || "Este campo es obligatorio"]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  components: {
    Cabecera,
    Footer,
    NavBar
  }
};

import Cabecera from "./Cabecera";
import Footer from "./Footer";
import NavBar from "@/components/NavBar.vue";
</script>


<style>
form {
  margin-left: 40%;
  margin-top: 10%;
}

#solicitud {
  background-color: rgb(255, 204, 102);
  height: 100%;
}
#form {
  margin: auto;
}
#row {
  margin-top: -5%;
}
</style>