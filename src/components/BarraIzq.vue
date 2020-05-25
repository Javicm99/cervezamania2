<template>
  <div class="BarraLateralIzq">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <b>
          CERVEZAS
          <img class="imagenCerve" src="../beer.svg" />
        </b>

        <span class="badge badge-primary badge-pill">
          <i class="fa fa-star"></i>
        </span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Estrella de levante
        <span class="badge badge-primary badge-pill">5</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Las demás
        <span class="badge badge-primary badge-pill">0</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarraIzq",
  components: {},
  props: {}
};
</script>

<style>
.BarraLateralIzq {
  color: black;
  padding: 5px;
  padding-top: 50px;
  float: left;
  width: 12%;
}
</style
>>
