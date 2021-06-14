<template>
    <form action="javascript:void(0)">
        <input type="text" id="signupUsername" placeholder="Username">
        <input type="password" id="signupPassword" placeholder="Password">
        <v-btn @click="signupUser" elevation="1" large :color="buttonColor">Signup</v-btn>
    </form>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "signup-users",

        data() {
            return {
                buttonColor: "#FAF1E6"
            }
        },

        methods: {
            signupUser() {
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
                    let userDataJSON = JSON.stringify(res.data);
                    cookies.set("userData", userDataJSON);
                    this.$router.push("/Store");
                }).catch((err) => {
                    console.log(err);
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
        border-radius: 20px;
        border: 1.5px solid var(--accentColor);
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