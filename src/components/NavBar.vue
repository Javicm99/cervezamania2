<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="option in options" :key="option" @click="() => {}">
            <v-list-item-title>{{ option }}</v-list-item-title>
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
          "Inicio",
          "Sobre Nosotros",
          "Contacta",
          "Solicitud de cerveza"
        ]
      }
    );
  }
};
</script>