<template>
    <section>
        <main id="waveContainer">
            <h1>candypost</h1>
            <div class="custom-shape-divider-bottom-1624657598">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </main>
        <img src="../assets/peppermintCandy.jpg" alt="">
        <p>View and upload your favourite candies! Join today or login into your account.</p>
        <v-tabs centered background-color="transparent" :color="textColor">
            <v-tab>Signup</v-tab>
            <v-tab>Login</v-tab>
            <v-tab-item>
                <signup-users></signup-users>
            </v-tab-item>
            <v-tab-item>
                <login-user></login-user>
                <h4>{{ APIResponse }}</h4>
            </v-tab-item>
        </v-tabs>
        <copyright-statement></copyright-statement>
    </section>
</template>

<script>
    // Importing components
    import SignupUsers from "../components/SignupUsers.vue";
    import LoginUser from "../components/LoginUser.vue";
    import CopyrightStatement from "../components/CopyrightStatement.vue";

    export default {
        name: "Home",

        // Setting the text colour of the tabs to an orange colour
        data() {
            return {
                textColor: "#F25287"
            }
        },

        // Registering the components
        components: {
            SignupUsers,
            LoginUser,
            CopyrightStatement
        },

        computed: {
            // Getting the user status from signing up or loggin into their account
            APIResponse() {
                return this.$store.state.userStatus; 
            }
        },
    }
</script>

<style scoped>
    section {
        text-align: center;
    }

    #waveContainer {
        position: relative;
        height: 16vh;
        background: var(--backgroundColor);
        width: 100%;
        top: 0;
        left: 0;
    }

    main {
        display: grid;
        place-items: center;
        row-gap: 20px;
        text-align: center;
        padding: 0% 5%;
    }

    img {
        width: 40vw;
    }

    .custom-shape-divider-bottom-1624657598 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1624657598 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 5vh;
    }

    .custom-shape-divider-bottom-1624657598 .shape-fill {
        fill: white;
    }

    h1 {
        font-family: var(--titleFont);
        color: var(--accentColor);
        font-size: 2rem;
    }

    p {
        font-size: 0.9rem;
        padding: 0% 10%;
        margin: 0vh 0vw 5vh 0vw;
        color: rgb(114, 114, 114);
    }

    p, .v-tabs, h4 {
        font-family: var(--bodyFont);
    }

    @media only screen and (min-width: 1024px) {
        img {
            width: 20vw;
        }
    }
</style>