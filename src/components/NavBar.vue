<template>
    <v-app-bar flat color="#FAF1E6">
        <img src="../assets/logoDarkOrangeBackground.jpg" alt="A clipart of two hard candies with first candy slightly angled towards the bottom left and the second candy slightly angled towards the bottom right. The first candy overlaps with the second candy and both candies each have a black-coloured outline and a striped-patterned wrapper with two black vertical stripes.">
        <!-- <h3>Candy Store</h3> -->
        <v-spacer></v-spacer>
        <v-btn text @click="logOutUser">Logout</v-btn>
    </v-app-bar>
</template>

<script>
    import cookies from "vue-cookies";

    export default {
        name: "nav-bar",

        data() {
            return {
                openSidePanel: false
            }
        },

        methods: {
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