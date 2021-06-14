<template>
  <section>
    <nav-bar></nav-bar>
    <v-divider></v-divider>
    <section id="mainContent">
      <create-candy></create-candy>
      <get-candy></get-candy>
    </section>
  </section>
</template>

<script>
import cookies from "vue-cookies";
import NavBar from "../components/NavBar.vue";
import CreateCandy from "../components/CreateCandy.vue";
import GetCandy from "../components/GetCandy.vue";

export default {
  name: 'Candy-Store',

  data() {
    return {
      userId: cookies.get("userData").id
    }
  },

  components: {
    NavBar,
    CreateCandy,
    GetCandy
  },

  mounted() {
    if(!this.userId) {
      this.$router.push("/");
    }
  },
}
</script>

<style scoped>
  #mainContent {
    display: grid;
    place-items: center;
  }
</style>