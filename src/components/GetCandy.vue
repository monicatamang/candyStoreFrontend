<template>
    <article>
        <div v-for="candy in candies" :key="candy[5]" class="candyCardContainer">
            <v-card v-if="candy[3] != ''">
                <img :src="candy[3]" :alt="candy[1]">
                <h1>{{ candy[0] }}</h1>
                <p>{{ candy[1] }}</p>
                <h3>${{ candy[2] }}</h3>
                <v-card-actions v-if="userId === candy[4]">
                    <edit-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></edit-candy>
                    <delete-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></delete-candy>
                </v-card-actions>
            </v-card>
            <v-card v-if="candy[3] === ''">
                <img src="../assets/logoWhiteBackground.jpg" alt="A clipart of two hard candies with first candy slightly angled towards the bottom left and the second candy slightly angled towards the bottom right. The first candy overlaps with the second candy and both candies each have a light orange-coloured outline and a striped-patterned wrapper with two light orange vertical stripes.">
                <h1>{{ candy[0] }}</h1>
                <p>{{ candy[1] }}</p>
                <h3>${{ candy[2] }}</h3>
                <v-card-actions v-if="userId === candy[4]">
                    <edit-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></edit-candy>
                    <delete-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></delete-candy>
                </v-card-actions>
            </v-card>
        </div>
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
        }
    }
</script>

<style scoped>
    article, .v-card {
        display: grid;
        place-items: center;
        row-gap: 20px;
    }

    img {
        width: 60%;
    }

    article {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 20px;
        margin: 5vh 0vh;
        width: 90vw;
    }

    .candyCardContainer, .v-card {
        width: 100%;
        height: 100%;
    }

    .candyCardContainer {
        text-align: center;
    }

    .v-card {
        padding: 5% 10%;
    }

    .v-card__actions {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }

    h1, h3 {
        font-family: var(--titleFont);
    }

    p, .v-btn {
        font-family: var(--bodyFont);
    }

    h1 {
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.85rem;
    }

    .v-btn {
        justify-self: end;
    }
</style>