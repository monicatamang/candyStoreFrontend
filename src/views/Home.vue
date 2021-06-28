<template>
    <section>
        <article id="waveContainer" class="hidden-md-and-up">
            <h1>candy post</h1>
            <!-- Creating a curved background -->
            <div class="custom-shape-divider-bottom-1624657598">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </article>
        <div id="contentContainer">
            <div id="sideContent">
                <h1 class="hidden-sm-and-down">candy post</h1>
                <img src="../assets/peppermintCandy.png" alt="A vector image of a dark pink peppermint candy that is wrapped with a dark pink wrapper. The peppermint has a swirled pattern combining both colours of white and dark pink.">
            </div>
            <div>
                <p>View and upload your favourite candies! Join today or log into your account.</p>
                <h4>{{ APIResponse }}</h4>
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
            </div>
        </div>
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

        // Setting the text colour of the tabs to a dark pink colour
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
            // Getting the user status from signing up or logging into their account
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
        background: var(--secondaryColor);
        width: 100%;
        top: 0;
        left: 0;
    }

    article {
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
        color: var(--primaryColor);
        font-size: 1.8rem;
    }

    p {
        font-size: 0.9rem;
        padding: 0% 10%;
        color: rgb(114, 114, 114);
    }

    p, .v-tabs, h4 {
        font-family: var(--bodyFont);
    }

    h4 {
        margin: 3vh 0vw;
    }

    .v-tab {
        text-transform: lowercase;
    }

    @media only screen and (min-width: 375px) and (orientation: landscape) {
        #waveContainer {
            height: 25vh;
        }

        img {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 768px) and (orientation: portrait) {
        h1 {
            font-size: 2.5rem;
        }

        img {
            width: 30vw;
        }

        p {
            font-size: 1.1rem;
        }

        .v-tab {
            font-size: 1.2rem;
        }
    }

    @media only screen and (min-width: 768px) and (orientation: landscape) {
        #waveContainer {
            height: 20vh;
        }

        p {
            font-size: 1.1rem;
        }

        .v-tab {
            font-size: 1.2rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        img {
            width: 15vw;
        }

        h1 {
            font-size: 2rem;
        }

        .v-tabs {
            margin-top: 8vh;
        }

        #contentContainer, #sideContent {
            display: grid;
            place-items: center;
        }

        #contentContainer {
            grid-template-columns: 1fr 2fr;
            height: 100vh;
        }

        #sideContent {
            background: var(--secondaryColor);
            width: 100%;
            height: 100%;
        }

        p {
            margin-top: 5vh;
        }
    }
</style>