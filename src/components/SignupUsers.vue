<template>
    <form action="javascript:void(0)">
        <input type="text" id="signupUsername" placeholder="Username">
        <input type="password" id="signupPassword" placeholder="Password">
        <v-btn @click="signupUser" elevation="1" large dark :color="buttonColor">Signup</v-btn>
    </form>
</template>

<script>
    // Importing axios and cookies
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "signup-users",

        data() {
            return {
                // Changing the colour of the button
                buttonColor: "#FABA8B"
            }
        },

        methods: {
            // Creating a POST request to sign up users
            signupUser() {
                // Configuring the request with the url, type, data type and the user's username and password
                axios.request({
                    url: "http://127.0.0.1:5000/users",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        username: document.getElementById("signupUsername").value,
                        password: document.getElementById("signupPassword").value,
                    }
                }).then((res) => {
                    console.log(res);
                    // If the network is done and there are no errors, convert the returned data into JSON format and store it as a cookie
                    let userDataJSON = JSON.stringify(res.data);
                    cookies.set("userData", userDataJSON);
                    // Taking the user to the Store page
                    this.$router.push("/Store");
                }).catch((err) => {
                    // If the network is done but the page errors, print an error message to the user
                    console.log(err);
                    this.$store.commit("updateUserStatus", "Failed to sign up.");
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
        background: #FDFAF6;
        padding: 5vh 0vh 6vh 0vh;
    }

    h1 {
        font-family: var(--titleFont);
    }

    input {
        background: white;
        padding: 3%;
        border-radius: 10px;
        border: 3px solid var(--mainDarkColor);
        font-family: var(--bodyFont);
        font-size: 0.9rem;
    }

    input:focus {
        outline: none;
    }

    .v-btn {
        font-family: var(--bodyFont);
    }
</style>