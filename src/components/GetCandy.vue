<template>
    <article>
        <!-- Creating two types of candy post layouts for post with and without images -->
        <div v-for="candy in candies" :key="candy[5]" class="candyCardContainer">
            <v-card v-if="candy[3] !== ''">
                <h4>@{{ candy[6] }}</h4>
                <img :src="candy[3]" :alt="candy[1]">
                <h1>{{ candy[0] }}</h1>
                <h3>${{ candy[2] }}</h3>
                <p>{{ candy[1] }}</p>
                <v-card-actions v-if="userId === candy[4]">
                    <edit-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></edit-candy>
                    <delete-candy :candyIdValue="candy[5]" :userIdValue="candy[4]"></delete-candy>
                </v-card-actions>
            </v-card>
            <v-card v-if="candy[3] === ''">
                <h4>@{{ candy[6] }}</h4>
                <img src="../assets/peppermintCandy.png" alt="A vector image of a dark pink peppermint candy that is wrapped with a dark pink wrapper. The peppermint has a swirled pattern combining both colours of white and dark pink">
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
    // Importing cookies and components
    import cookies from "vue-cookies";
    import EditCandy from "../components/EditCandy.vue";
    import DeleteCandy from "../components/DeleteCandy.vue";

    export default {
        name: "get-candy",

        // Registering the components
        components: {
            EditCandy,
            DeleteCandy
        },

        data() {
            return {
                // Getting the userId from the user's cookie
                userId: cookies.get("userData").id
            }
        },

        computed: {
            // Getting the list of all candy posts from the store
            candies() {
                return this.$store.state.allCandies; 
            }
        }
    }
</script>

<style scoped>
    article, .v-card, .v-card__actions {
        display: grid;
        place-items: center;
    }

    article, .v-card {
        row-gap: 20px;
    }

    img {
        width: 40%;
    }

    article {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 20px;
        margin-bottom: 5vh;
        width: 90vw;
        
    }

    .candyCardContainer, .v-card {
        width: 100%;
        height: 100%;
    }

    .v-card {
        padding: 5%;
        text-align: center;
    }

    .v-card__actions {
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }

    h1 {
        font-weight: 600;
    }

    h3 {
        font-weight: 500;
    }

    p, .v-btn, h4, h1, h3 {
        font-family: var(--bodyFont);
    }

    h1 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1rem;
    }

    h4 {
        font-weight: 600;
        color: var(--primaryColor);
    }

    p {
        font-size: 0.8rem;
    }

    .v-btn {
        justify-self: end;
    }

    @media only screen and (min-width: 1024px) {
        article {
            width: 95vw;
        }

        img {
            width: 40%;
        }

        h1 {
            font-size: 1.2rem;
        }

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.75rem;
        }

        .v-card {
            row-gap: 5px;
        }
    }
</style>