<template>
  <section>
    <nav-bar></nav-bar>
    <v-divider></v-divider>
    <h4>{{ APIResponse }}</h4>
    <section id="mainContent">
      <create-candy></create-candy>
      <get-candy></get-candy>
    </section>
  </section>
</template>

<script>
// Importing cookies and components
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

  computed: {
    // Getting the API responses from the POST, PATCH, DELETE or GET requests
    APIResponse() {
      return this.$store.state.requestStatus; 
    }
  },

  mounted() {
    // If the user does not have a valid id, take them back to the Home page
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

  h4 {
    text-align: center;
    font-family: var(--bodyFont);
    margin: 3vh 0vw;
  }

  @media only screen and (min-width: 1024px) {
    img {
        width: 10vw;
    }
  }
</style>