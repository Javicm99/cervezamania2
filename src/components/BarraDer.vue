<template>
  <div class="BarraLateralDer">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b>
          LOCALES
          <img class="imagenCerve" src="../local.svg" />
        </b>
        <span class="badge badge-primary badge-pill">
          <i class="fa fa-star"></i>
        </span>
      </li>
      <!--elementos listas de barras laterales-->
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Fosters
        <span class="badge badge-primary badge-pill">5</span>
      </li>
      <!--/elementos listas de barras laterales-->
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Los demás
        <span class="badge badge-primary badge-pill">0</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarraDer",
  components: {},
  methods: {},
  props: {}
};
</script>

<style>
.BarraLateralDer {
  color: black;
  padding: 5px;
  padding-top: 50px;
  float: right;
  margin-right: 1%;
  width: 12%;
}
</style>
