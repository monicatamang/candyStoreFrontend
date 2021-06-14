<template>
    <v-app-bar flat>
        <h1>Candy Store</h1>
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
    h1 {
        font-family: var(--titleFont);
    }
</style>