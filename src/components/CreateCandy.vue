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
    // Import axios and cookies
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "create-candy",

        data() {
            return {
                // The dialog is intially closed until the button is clicked
                dialog: false,
                // Changing the colour of the button
                buttonColor: "#F9F3F3"
            }
        },

        methods: {
            // Creating a POST request to create a new candy post
            createCandy() {
                this.$store.commit("updateRequestStatus", "");
                // Configuring the request with the url, type, data type and the user's data
                axios.request({
                    url: `${process.env.VUE_APP_API_URL}/candy`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get("userData").loginToken,
                        name: document.getElementById("candyName").value,
                        description: document.getElementById("candyDescription").value,
                        priceInDollars: parseFloat(document.getElementById("candyPrice").value),
                        imageUrl: document.getElementById("candyImage").value,
                    }
                }).then((res) => {
                    // If the network is done and there are no errors, send the returned data to the store
                    res;
                    this.$store.commit("addNewCandy", res.data)
                }).catch((err) => {
                    // If the network is done but the page errors, print an error message to the user
                    err;
                    this.$store.commit("updateRequestStatus", "Failed to create candy post. Please try again.");
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
        border-bottom: 1.5px solid var(--primaryColor);
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

    @media only screen and (min-width: 768px) {
        #postCandyButton {
            right: 4vw;
        }

        input, textarea {
            width: 65%;
            padding: 3% 1%;
        }
    }

    @media only screen and (min-width: 1024px) {
        #postCandyButton {
            right: 3vw;
        }
    }
</style>