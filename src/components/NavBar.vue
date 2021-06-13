<template>
    <v-app-bar flat>
        <h1>Candy Store</h1>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
    export default {
        name: "nav-bar",

        data() {
            return {
                openSidePanel: false
            }
        },
    }
</script>

<style scoped>
    h1 {
        font-family: var(--titleFont);
    }
</style>