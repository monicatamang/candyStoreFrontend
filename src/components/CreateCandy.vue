<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn :color="buttonColor" v-bind="attrs" v-on="on" fab fixed large id="postCandyButton">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>Create Your Candy</v-card-title>
            <form action="javascript:void(0)" id="createCandyForm">
                <input type="text" id="candyName" placeholder="Name*">
                <textarea id="candyDescription" cols="25" rows="3" placeholder="Description"></textarea>
                <input type="text" id="candyPrice" placeholder="Price (CAD$)*">
                <input type="URL" id="candyImage" placeholder="Image URL">
            </form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false" text>Close</v-btn>
                <v-btn text @click="dialog = false; createCandy()">Post</v-btn>
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
                dialog: false,
                buttonColor: "#FAF1E6"
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
                    document.getElementById("createCandyForm").reset();
                    this.$store.commit("addNewCandy", res.data)
                }).catch((err) => {
                    console.log(err);
                });

                document.getElementById("createCandyForm").reset();
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

    .v-card__title {
        font-family: var(--bodyFont);
    }

    .v-btn {
        font-family: var(--bodyFont);
        margin-top: 5vh;
    }

    input, textarea {
        background: white;
        padding: 3%;
        border-bottom: 1.5px solid var(--accentColor);
        font-family: var(--bodyFont);
        font-size: 0.9rem;
    }

    input:focus, textarea:focus {
        outline: none;
    }

    #postCandyButton {
        z-index: 1;
        bottom: 3vh;
        right: 5vw;
    }
</style>