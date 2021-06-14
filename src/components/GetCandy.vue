<template>
    <article>
        <v-card v-for="candy in candies" :key="candy[5]" class="candyCard">
            <img :src="candy[3]" :alt="candy[1]">
            <h1>{{ candy[0] }}</h1>
            <p>{{ candy[1] }}</p>
            <h3>${{ candy[2] }}</h3>
            <v-card-actions v-if="userId === candy[4]">
                <edit-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></edit-candy>
                <delete-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></delete-candy>
            </v-card-actions>
        </v-card>
    </article>
</template>

<script>
    import cookies from "vue-cookies";
    import EditCandy from "../components/EditCandy.vue";
    import DeleteCandy from "../components/DeleteCandy.vue";

    export default {
        name: "get-candy",

        components: {
            EditCandy,
            DeleteCandy
        },

        data() {
            return {
                userId: cookies.get("userData").id
            }
        },

        computed: {
            candies() {
                return this.$store.state.allCandies; 
            }
        },

        // mounted() {
        //     this.$store.dispatch("getCandy");
        // }
    }
</script>

<style scoped>
    img {
        width: 60%;
    }

    article {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        row-gap: 20px;
        column-gap: 20px;
        margin: 5vh 0vh;
        width: 90vw;
    }

    .v-card {
        display: grid;
        place-items: center;
        row-gap: 20px;
        width: 100%;
        height: 100%;
        padding: 0% 10% 5% 10%;
        text-align: center;
    }

    .v-card__actions {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }

    .v-btn {
        justify-self: end;
    }

    p {
        font-size: 0.85rem;
    }

    h1, h3 {
        font-family: var(--titleFont);
    }

    h1 {
        font-size: 1.8rem;
    }

    p, .v-btn {
        font-family: var(--bodyFont);
    }

    h3 {
        font-size: 1.5rem;
    }
</style>