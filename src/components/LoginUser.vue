<template>
    <form action="javascript:void(0)">
        <input type="text" id="loginUsername" placeholder="Username*">
        <input type="password" id="loginPassword" placeholder="Password*">
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
                this.$store.commit("updateUserStatus", "");
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
                    res;
                    let userDataJSON = JSON.stringify(res.data);
                    cookies.set("userData", userDataJSON);
                    // Taking the user to the Store page
                    this.$router.push("/Store");
                }).catch((err) => {
                    // If the network is done and there are no errors, print an error message to the user
                    err;
                    this.$store.commit("updateUserStatus", "Failed to log in. Please try again.");
                });
            }
        },
    }
</script>

<style scoped>
    form {
        display: grid;
        place-items: center;
        row-gap: 20px;
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
        border: 3px solid var(--secondaryColor);
        font-family: var(--bodyFont);
        font-size: 0.9rem;
    }

    input:focus {
        outline: none;
    }

    .v-btn {
        font-family: var(--bodyFont);
        text-transform: capitalize;
        margin-top: 2vh;
    }

    @media only screen and (min-width: 768px) and (orientation: portrait) {
        input {
            padding: 2%;
        }

        input, .v-btn:not(.v-btn--round).v-size--large {
            font-size: 1.1rem;
        }

        .v-btn:not(.v-btn--round).v-size--large {
            padding: 3.5%;
        }
    }

    @media only screen and (min-width: 768px) and (orientation: landscape) {
        .v-btn:not(.v-btn--round).v-size--large {
            padding: 2.5%;
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        input {
            height: 1vh;
            padding: 3% 2%;
            width: 40%;
        }

        .v-btn:not(.v-btn--round).v-size--large {
            padding: 2%;
            font-size: 1rem;
        }

        form {
            margin-top: 2vh;
            row-gap: 25px;
        }
    }
</style>