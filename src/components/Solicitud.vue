<template>
  <v-responsive>
    <div id="solicitud">
      <Cabecera></Cabecera>
      <v-row>
        <v-form ref="form" v-model="valid">
          <h1>Formulario</h1>
          <v-text-field v-model="local" :rules="localRules" label="Local" required></v-text-field>

          <v-text-field v-model="cerveza" :rules="cervezaRules" label="Cerveza" required></v-text-field>

          <v-text-field label="Descripción"></v-text-field>

          <v-btn color="error" class="mr-4" @click="reset">Resetear Campos</v-btn>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Enviar</v-btn>
        </v-form>
      </v-row>

      <div id="prueba">
        <Footer></Footer>
      </div>
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
    Footer
  }
};

import Cabecera from "./Cabecera";
import Footer from "./Footer";
</script>


<style>
form {
  margin-left: 40%;
  margin-top: 10%;
}
.prueba {
  margin-top: 5%;
}
</style>