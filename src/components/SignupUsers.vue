<template>
    <form action="javascript:void(0)">
        <h1>Create an Account</h1>
        <input type="text" id="signupUsername" placeholder="username">
        <input type="password" id="signupPassword" placeholder="password">
        <v-btn @click="signupUser">Signup</v-btn>
    </form>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "signup-users",

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
        row-gap: 10px;
        margin-top: 5vh;
    }
</style>