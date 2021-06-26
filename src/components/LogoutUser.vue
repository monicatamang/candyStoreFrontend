<template>
    <v-btn text @click="logOutUser">Logout</v-btn>
</template>

<script>
    import axios from "axios"
    import cookies from "vue-cookies";

    export default {
        name: "logout-user",

        methods: {
            // If the user logs out of their account, delete their cookie and take them to the Home page
            logOutUser() {
                axios.request({
                    url: `${process.env.VUE_APP_API_URL}/login`,
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get("userData").loginToken
                    }
                }).then((res) => {
                    res;
                    cookies.remove("userData");
                    this.$router.push("/");
                }).catch((err) => {
                    err;
                });
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        font-family: var(--bodyFont);
    }
</style>