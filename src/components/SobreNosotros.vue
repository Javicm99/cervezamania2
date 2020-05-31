<template>
  <div>
    <Cabecera></Cabecera>
    <NavBar></NavBar>

    <v-card class="mx-auto" max-width="434" tile>
      <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        <v-avatar class="profile" color="grey" size="164" tile>
          <v-img src="../../Alex.jpeg"></v-img>
        </v-avatar>

        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <v-list-item-title class="title">Alejandro Sánchez</v-list-item-title>
            <v-list-item-subtitle>Desarrollador Web</v-list-item-subtitle>
            <div>
              <v-content>
                <p>
                  Soy un alumno en prácticas en la Empresa We Fish, acabo de terminar el grado superior de Desarrollo de Aplicaciones
                  Web en el instuto José Planes
                </p>
              </v-content>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-img>
    </v-card>

    <v-card class="mx-auto" max-width="434" tile>
      <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        <v-avatar class="profile" color="grey" size="164" tile>
          <v-img src></v-img>
        </v-avatar>

        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <v-list-item-title class="title">Javier Castaño Monteagudo</v-list-item-title>
            <v-list-item-subtitle>Desarrollador Web</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>
      <v-card class="mx-auto" max-width="434" tile>
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
          <v-avatar class="profile" color="grey" size="164" tile>
            <v-img src></v-img>
          </v-avatar>

          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">José Ignacio Valle</v-list-item-title>
              <v-list-item-subtitle>Desarrollador Web</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-img>
      </v-card>
    </v-card>
    <Footer></Footer>
  </div>
</template>



<script>
import Footer from "@/components/Footer.vue";
import Cabecera from "@/components/Cabecera.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "SobreNosotros",
  components: { Footer, Cabecera, NavBar },
  methods: {},
  props: {}
};
</script>

<style>
</style>
