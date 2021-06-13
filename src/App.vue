<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  mounted () {
    this.$store.dispatch("getCandy");
  },
};
</script>

<style>
  :root {
    --titleFont: "Lora", serif;
    --bodyFont: "Poppins", sans-serif;
  }
</style>