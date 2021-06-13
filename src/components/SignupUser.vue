<template>
    <form action="javascript:void(0)">
        <h1>Create an Account</h1>
        <input type="text" id="signUpUsername" placeholder="username">
        <input type="password" id="signUpPassword" placeholder="password">
        <v-btn @click="signupUser">Signup</v-btn>
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        name: "signup-user",

        data() {
            return {
                signupStatus: ""
            }
        },

        methods: {
            signupUser() {
                axios.request({
                    url: "http://127.0.0.1:5000/signup",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        username: document.getElementById("signUpUsername").value,
                        password: document.getElementById("signUpPassword").value,
                    }
                }).then((res) => {
                    console.log(res);
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
        row-gap: 10px;
        margin-top: 5vh;
    }
</style>