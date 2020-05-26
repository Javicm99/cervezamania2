<template>
  <div id="solicitud">
    <Cabecera></Cabecera>
    <v-row>
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="Correo electrónico" required></v-text-field>

        <v-text-field v-model="description" label="Descripción" required></v-text-field>

        <v-btn color="error" class="mr-4" @click="reset">Resetear Campos</v-btn>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Enviar</v-btn>
      </v-form>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Solicitud",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "El campo nombre es requerido",
      v =>
        (v && v.length <= 10) || "El nombre debe tener menos de 10 caracteres"
    ],
    email: "",
    emailRules: [
      v => !!v || "Este campo es obligatorio",
      v => /.+@.+\..+/.test(v) || "El correo electrónico debe ser correcto"
    ],
    description: ""
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
#solicitud {
  display-flex: center;
}
form {
  margin-left: 40%;
  margin-top: 10%;
}
</style>