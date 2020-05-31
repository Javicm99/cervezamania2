
<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="option in options" @click="goTo(option.ruta)" :key="option.name">
            <v-list-item-title>{{ option.nombre }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-title>Menú</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: "NavBar",
  data() {
    return (
      {
        drawer: true
      },
      {
        options: [
          { nombre: "Inicio", ruta: "Central", estado: true },
          { nombre: "Sobre nosotros", ruta: "SobreNosotros", estado: true }, //contacta
          { nombre: "Solicitud de cerveza", ruta: "Solicitud", estado: true },
          { nombre: "Nuestras cervezas", ruta: "Cervezas", estado: true }
        ]
      }
    );
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<style >
</style>