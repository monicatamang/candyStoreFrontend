<template>
    <article>
        <v-card v-for="candy in candies" :key="candy[4]" class="candyCard">
            <img :src="candy[3]" :alt="candy[1]">
            <h3>{{ candy[0] }} | ${{ parseFloat(candy[2]) }}</h3>
            <p>{{ candy[1] }}</p>
            <v-card-actions>
                <v-btn @click="editCandy(candy[4])">Edit</v-btn>
                <v-btn @click="deleteCandy(candy[4])">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </article>
</template>

<script>
    import axios from "axios";

    export default {
        name: "get-candy",

        data() {
            return {
                candies: []
            }
        },

        methods: {
            getCandy() {
                axios.request({
                url: "http://127.0.0.1:5000/candy",
                method: "GET"
                }).then((res) => {
                    console.log(res);
                    this.candies = res.data;
                }).catch((err) => {
                    console.log(err);
                });
            },
        },

        mounted() {
            this.getCandy();
        },
    }
</script>

<style scoped>
    img {
        width: 15vw;
        /* width: 10vw; */
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
        row-gap: 10px;
        width: 100%;
        height: 100%;
        padding: 0% 10%;
    }

    p {
        font-size: 0.8rem;
        /* font-size: 0.6rem; */
    }

    h3, h4 {
        font-family: var(--titleFont);
        /* font-size: 0.8rem; */
    }

    p, .v-btn {
        font-family: var(--bodyFont);
        /* font-size: 0.6rem; */
    }
</style>