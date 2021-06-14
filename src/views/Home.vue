<template>
    <section>
        <main>
            <img src="../assets/logoOrangeBackground.jpg" alt="A clipart of two hard candies with a striped-patterned wrapped.">
            <h1>Welcome to the Candy Store</h1>
            <p>View and upload your favourite candies! Join today or login into your account.</p>
        </main>
        <v-tabs centered background-color="transparent" :color="textColor">
            <v-tab>Signup</v-tab>
            <v-tab>Login</v-tab>
            <v-tab-item>
                <signup-users></signup-users>
            </v-tab-item>
            <v-tab-item>
                <login-user></login-user>
            </v-tab-item>
        </v-tabs>
        <copyright-statement></copyright-statement>
    </section>
</template>

<script>
    import SignupUsers from "../components/SignupUsers.vue";
    import LoginUser from "../components/LoginUser.vue";
    import CopyrightStatement from "../components/CopyrightStatement.vue";

    export default {
        name: "Home",

        data() {
            return {
                textColor: "#FABA8B"
            }
        },

        components: {
            SignupUsers,
            LoginUser,
            CopyrightStatement
        },
    }
</script>

<style scoped>
    main {
        display: grid;
        place-items: center;
        row-gap: 20px;
        text-align: center;
        padding: 0% 5%;
        margin: 3vh 0vh;
    }

    img {
        width: 60vw;
        margin-bottom: -2vh;
    }

    h1 {
        font-family: var(--titleFont);
    }

    p {
        font-size: 0.9rem;
        padding: 0% 6%;
    }

    p, .v-tabs {
        font-family: var(--bodyFont);
    }
</style>