<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Make Candy</v-btn>
        </template>
        <v-card>
            <v-card-title class="text-center">Candy Store</v-card-title>
            <v-card-subtitle>Create Your Candy</v-card-subtitle>
            <form action="javascript:void(0)" id="candyForm">
                <h3>Enter a new candy</h3>
                <input type="text" id="candyName" placeholder="Name">
                <input type="text" id="candyDescription" placeholder="Description">
                <input type="text" id="candyPrice" placeholder="Price($)">
                <input type="URL" id="candyImage" placeholder="Image URL">
            </form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false; createCandy()">Create</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "create-candy",

        data() {
            return {
                dialog: false
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
                        imageUrl: document.getElementById("candyImage").value,
                        userId: cookies.get("userData").id
                    }
                }).then((res) => {
                    console.log(res);
                    document.getElementById("candyForm").reset();
                    this.$store.commit("addNewCandy", res.data[0])
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