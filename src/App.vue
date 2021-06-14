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

  mounted () {
    this.$store.dispatch("getCandy");
  },
};
</script>

<style>
  :root {
    --titleFont: "Lora", serif;
    --bodyFont: "Poppins", sans-serif;
    --mainDarkColor: #FAF1E6;
    --mainLightColor: #FDFAF6;
    --accentColor: #FABA8B;
  }

  .v-main__wrap {
    background: #FDFAF6;
  }
</style>