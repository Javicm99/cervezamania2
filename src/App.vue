<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
//import Central from "./components/Central";
//import Cabecera from "@/components/Cabecera.vue";
//import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    //Cabecera,
    // Footer
    // Central,
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    }
  },

  data: () => ({
    //
  }),
  mounted() {}
};
</script>
