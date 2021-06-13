<template>
  <section>
    <nav-bar></nav-bar>
    <section id="mainContent">
      <create-candy></create-candy>
      <get-candy></get-candy>
    </section>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CreateCandy from "../components/CreateCandy.vue";
import GetCandy from "../components/GetCandy.vue";

export default {
  name: 'Candy-Store',

  components: {
    NavBar,
    CreateCandy,
    GetCandy
  }
}
</script>

<style scoped>
  #mainContent {
    display: grid;
    place-items: center;
  }
</style>