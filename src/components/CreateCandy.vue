<template>
    <article>
        <v-btn @click="openSidePanel = !openSidePanel">Create Your Candy</v-btn>
        <v-navigation-drawer v-model="openSidePanel" absolute right temporary>
            <form action="javascript:void(0)">
                <h3>Enter a new candy</h3>
                <input type="text" id="candyName" placeholder="Name">
                <input type="text" id="candyDescription" placeholder="Description">
                <input type="text" id="candyPrice" placeholder="Price($)">
                <input type="text" id="candyImage" placeholder="Image URL">
                <input type="submit" value="Create Candy" @click="createCandy">
            </form>
        </v-navigation-drawer>
    </article>
</template>

<script>
    import axios from "axios";

    export default {
        name: "create-candy",

        data() {
            return {
                openSidePanel: false
            }
        },

        methods: {
            createCandy() {
                axios.request({
                url: "http://127.0.0.1:5000/candy",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    name: document.getElementById("candyName").value,
                    description: document.getElementById("candyDescription").value,
                    priceInDollars: parseFloat(document.getElementById("candyPrice").value),
                    imageUrl: document.getElementById("candyImage").value
                }
                }).then((res) => {
                    console.log(res);
                    document.getElementById("candyForm").reset();
                    this.candies.push(res.data[0]);
                }).catch((err) => {
                    console.log(err);
                });
            },
        }
    }
</script>

<style scoped>
    form {
        display: grid;
        place-items: center;
        row-gap: 3vh;
        margin-top: 5vh;
    }

    h3 {
        font-family: var(--titleFont);
    }

    .v-btn {
        font-family: var(--bodyFont);
        margin-top: 5vh;
    }
</style>