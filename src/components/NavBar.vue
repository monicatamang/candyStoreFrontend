<template>
    <v-app-bar flat color="#F9F3F3">
        <h3>candy post</h3>
        <v-spacer></v-spacer>
        <logout-user></logout-user>
    </v-app-bar>
</template>

<script>
    import LogoutUser from "./LogoutUser.vue";

    export default {
        name: "nav-bar",

        components: {
            LogoutUser
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
        color: var(--primaryColor);
        font-weight: bold;
    }

    h3 {
        font-weight: 500;
    }

    img {
        width: 15%;
    }
</style>