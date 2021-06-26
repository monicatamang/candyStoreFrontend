<template>
    <form action="javascript:void(0)">
        <input type="text" id="loginUsername" placeholder="Username">
        <input type="password" id="loginPassword" placeholder="Password">
        <!-- When clicked, the function is called to log in users -->
        <v-btn @click="attemptLoginUser" elevation="1" large dark :color="buttonColor">Login</v-btn>
    </form>
</template>

<script>
    // Importing axios and cookies
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "login-user",

        data() {
            return {
                // Changing the colour of the button
                buttonColor: "#F25287"
            }
        },

        methods: {
            // Creating a POST request to log in users
            attemptLoginUser() {
                // Configuring the request with the url, type, data type and the user's username and password
                axios.request({
                    url: `${process.env.VUE_APP_API_URL}/login`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        username: document.getElementById("loginUsername").value,
                        password: document.getElementById("loginPassword").value,
                    }
                }).then((res) => {
                    // If the network is done and there are no errors, convert the returned data into JSON format and store the user's credentials as a cookie
                    console.log(res);
                    let userDataJSON = JSON.stringify(res.data);
                    cookies.set("userData", userDataJSON);
                    // Taking the user to the Store page
                    this.$router.push("/Store");
                }).catch((err) => {
                    // If the network is done and there are no errors, commit an error message to the user
                    console.log(err);
                    this.$store.commit("updateRequestResponse", "Failed to log in.");
                });
            }
        },
    }
</script>

<style scoped>
    form {
        display: grid;
        place-items: center;
        row-gap: 30px;
        background: white;
        padding: 5vh 0vh 6vh 0vh;
    }

    h1 {
        font-family: var(--titleFont);
    }

    input {
        background: white;
        padding: 3%;
        border-radius: 10px;
        border: 3px solid var(--backgroundColor);
        font-family: var(--bodyFont);
        font-size: 0.9rem;
    }

    input:focus {
        outline: none;
    }

    .v-btn {
        font-family: var(--bodyFont);
    }

    @media only screen and (min-width: 1024px) {
        input {
            height: 1vh;
        }
    }
</style>