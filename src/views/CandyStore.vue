<template>
  <section>
    <v-app-bar flat>
        <h1>Candy Store</h1>
        <v-spacer></v-spacer>
    </v-app-bar>
    <section id="mainContent">
      <create-candy></create-candy>
      <get-candy></get-candy>
    </section>
  </section>
</template>

<script>
import CreateCandy from "../components/CreateCandy.vue";
import GetCandy from "../components/GetCandy.vue";

export default {
  name: 'Candy-Store',

  components: {
    CreateCandy,
    GetCandy
  },

  data() {
    return {
        candies: [],
        openSidePanel: false
    }
  }
}
</script>

<style scoped>
  #mainContent {
    display: grid;
    place-items: center;
  }

  h1 {
    font-family: var(--titleFont);
  }
</style>