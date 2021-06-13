<template>
    <form action="javascript:void(0)">
        <h1>Login</h1>
        <input type="text" id="loginUsername" placeholder="username">
        <input type="password" id="loginPassword" placeholder="password">
        <v-btn @click="attemptLoginUser">Login</v-btn>
    </form>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "login-user",

        methods: {
            attemptLoginUser() {
                axios.request({
                    url: "http://127.0.0.1:5000/login",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        username: document.getElementById("loginUsername").value,
                        password: document.getElementById("loginPassword").value,
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