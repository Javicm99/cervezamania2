<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto" max-width="400">
        <v-img class="black--text align-end" height="200px" src="../beer.svg">
          <v-card-title></v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Top 5 Cervezas</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Estrella levante</div>

          <div>Heineken</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Compartir</v-btn>

          <v-btn color="orange" text>Explorar</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Vuecard",
  data: () => ({}),
  components: {},
  props: {}
};
</script>

<style>
</style
>>
