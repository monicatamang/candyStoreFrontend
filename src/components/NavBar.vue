<template>
    <v-app-bar flat color="#faf1e6">
        <h3>Candy Store</h3>
        <v-spacer></v-spacer>
        <v-btn text @click="logOutUser">Logout</v-btn>
    </v-app-bar>
</template>

<script>
    import cookies from "vue-cookies";

    export default {
        name: "nav-bar",

        data() {
            return {
                openSidePanel: false
            }
        },

        methods: {
            logOutUser() {
                cookies.remove("userData");
                this.$router.push("/");
            }
        },
    }
</script>

<style scoped>
    h3 {
        font-family: var(--bodyFont);
        font-weight: 500;
    }
</style>