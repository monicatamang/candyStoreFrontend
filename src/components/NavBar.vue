<template>
    <v-app-bar flat color="#F9F3F3">
        <!-- <img src="../assets/peppermintCandy.jpg" alt="A clipart of two hard candies with first candy slightly angled towards the bottom left and the second candy slightly angled towards the bottom right. The first candy overlaps with the second candy and both candies each have a black-coloured outline and a striped-patterned wrapper with two black vertical stripes."> -->
        <h3>candypost</h3>
        <v-spacer></v-spacer>
        <logout-user></logout-user>
    </v-app-bar>
</template>

<script>
    import LogoutUser from "./LogoutUser.vue";

    export default {
        name: "nav-bar",

        components: {
            LogoutUser,
        },

        data() {
            return {
                // The side panel is intially not opened until the button is clicked
                openSidePanel: false
            }
        }
    }
</script>

<style scoped>
    h3 {
        font-family: var(--titleFont);
        color: var(--accentColor);
    }

    h3 {
        font-weight: 500;
    }

    img {
        width: 15%;
    }
</style>