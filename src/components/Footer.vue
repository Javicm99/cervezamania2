<template>
  <v-footer id="footer" dark padless>
    <v-card class="flex" flat tile>
      <v-card-title>
        Copyright Cervezamania2@
        <v-spacer></v-spacer>

        <a id="cervezascercanas" href="https://www.google.es/maps">
          <v-btn>
            <span>Cervezas cercanas</span>

            <link />
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </a>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon.nombre" class="mx-4" dark icon>
          <a id="rss" :href="icon.ruta">
            <v-icon size="24px">
              {{
              icon.nombre
              }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      { nombre: "mdi-twitter", ruta: "https://twitter.com/Cervezamana1" },
      {
        nombre: "mdi-facebook",
        ruta: "https://www.facebook.com/cerveza.mania.79"
      },
      {
        nombre: "mdi-instagram",
        ruta: "https://www.instagram.com/cervezamania2020/"
      }
    ]
  }),
  methods: {
    goTo(name) {
      this.$router.push({ name: name });
    }
  },
  components: {},
  props: {}
};
</script>

<style>
#footer {
  background: #000;
  position: absolute; /*El div será ubicado con relación a la pantalla*/
  left: 0px; /*A la derecha deje un espacio de 0px*/
  right: 0px; /*A la izquierda deje un espacio de 0px*/
  bottom: 0px; /*Abajo deje un espacio de 0px*/
  /*alto del div*/
  z-index: 0;
}
#cervezascercanas {
  text-decoration: none;
}

#rss {
  text-decoration: none;
}
</style
>> /* icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter"] */
