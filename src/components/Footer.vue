
<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Contacta con nosotros en nuestras Redes Sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="(icon,index) in icons" :key="icon" class="mx-4" dark icon>
          <v-icon @click="link(index)" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter"]
  }),
  methods: {
    link(index) {
      var link = [
        "https://www.facebook.com/cerveza.mania.79",
        "https://twitter.com/Cervezamana1",
        "https://www.instagram.com/cervezamania2020/"
      ];
      if (index === 1) {
        console.log("has pulsado en facebook");
        link = link[0];
      } else if (index === 2) {
        console.log("has pulsado en tw");

        link = link[1];
      } else {
        console.log("has pulsado en insta");

        link = link[2];
      }

      return link;
    }
  },
  components: {},
  props: {}
};
</script>

<style>
</style
>>
