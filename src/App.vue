<template>
  <v-app>
    <v-main color="#F9EAC2">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  // Getting all candy posts from the API request
  mounted () {
    this.$store.dispatch("getCandy");
  },
};
</script>

<style>
  :root {
    --titleFont: "Lora", serif;
    --bodyFont: "Poppins", sans-serif;
    --primaryColor: #F25287;
    --secondaryColor: #F9F3F3;
  }

  .v-main__wrap {
    background: white;
  }
</style>