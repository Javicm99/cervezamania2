<template>
  <div id="login">
    <Cabecera></Cabecera>
    <v-row>
      <v-form ref="form" v-model="valid">
        <h1>Login</h1>
        <v-text-field v-model="email" :rules="emailRules" label="Correo electrónico" required></v-text-field>

        <v-text-field v-model="description" label="Contraseña" required></v-text-field>

        <v-btn color="error" class="mr-4" @click="reset">Resetear Campos</v-btn>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Enviar</v-btn>
      </v-form>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Login",

  components: {
    Cabecera,
    Footer
  }
};

import Cabecera from "./Cabecera";
import Footer from "./Footer";
</script>


<style>
#login {
  display-flex: center;
}
form {
  margin-left: 40%;
  margin-top: 10%;
}
</style>