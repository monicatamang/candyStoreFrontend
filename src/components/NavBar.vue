<template>
    <v-app-bar flat color="#FAF1E6">
        <img src="../assets/logoDarkOrangeBackground.jpg" alt="A clipart of two hard candies with first candy slightly angled towards the bottom left and the second candy slightly angled towards the bottom right. The first candy overlaps with the second candy and both candies each have a black-coloured outline and a striped-patterned wrapper with two black vertical stripes.">
        <v-spacer></v-spacer>
        <!-- If clicked, call the function to log the user out of their account -->
        <v-btn text @click="logOutUser">Logout</v-btn>
    </v-app-bar>
</template>

<script>
    // Importing cookies
    import cookies from "vue-cookies";

    export default {
        name: "nav-bar",

        data() {
            return {
                // The side panel is intially not opened until the button is clicked
                openSidePanel: false
            }
        },

        methods: {
            // If the user logs out of their account, delete their cookie and take them to the Home page
            logOutUser() {
                cookies.remove("userData");
                this.$router.push("/");
            }
        },
    }
</script>

<style scoped>
    .v-btn, h3 {
        font-family: var(--bodyFont);
    }

    h3 {
        font-weight: 500;
    }

    img {
        width: 15%;
    }
</style>