<template>
    <v-btn text @click="logOutUser">Logout</v-btn>
</template>

<script>
    import axios from "axios"
    import cookies from "vue-cookies";

    export default {
        name: "logout-user",

        methods: {
            // Creating a DELETE request to log out users
            logOutUser() {
                this.$store.commit("updateRequestStatus", "");
                // Configuring the request with the url, type, data type and the user's login token
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
                    // If the network is done and there are no errors, delete the user's cookie and take them to the Home page
                    res;
                    cookies.remove("userData");
                    this.$router.push("/");
                }).catch((err) => {
                    // If the network is done but the page errors, print an error message to the user
                    err;
                    this.$store.commit("updateRequestStatus", "Failed to log out. Please try again.");
                });
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        font-family: var(--bodyFont);
        text-transform: lowercase;
    }
</style>