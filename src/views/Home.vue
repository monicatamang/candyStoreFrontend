<template>
    <section>
        <nav-bar></nav-bar>
        <v-tabs centered center-active>
            <v-tab>Signup</v-tab>
            <v-tab>Login</v-tab>
            <v-tab-item>
                <signup-user></signup-user>
            </v-tab-item>
            <v-tab-item>
                <login-user></login-user>
            </v-tab-item>
        </v-tabs>
    </section>
</template>

<script>
    import NavBar from "../components/NavBar.vue";
    import SignupUser from "../components/SignupUser.vue";
    import LoginUser from "../components/LoginUser.vue";

    export default {
        name: "Home",

        components: {
            NavBar,
            SignupUser,
            LoginUser
        },
    }
</script>

<style scoped>

</style>