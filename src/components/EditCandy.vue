<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="#F25287" v-bind="attrs" v-on="on">Edit</v-btn>
        </template>
        <v-card>
            <v-card-title class="text-center">Edit Your Candy</v-card-title>
            <form :id="`editCandyForm${candyIdValue}`" action="javascript:void(0)">
                <input type="text" :id="`editCandyName${candyIdValue}`" placeholder="Name">
                <textarea :id="`editCandyDescription${candyIdValue}`" cols="25" rows="3" placeholder="Description"></textarea>
                <input type="text" :id="`editCandyPrice${candyIdValue}`" placeholder="Price($)">
                <input type="URL" :id="`editCandyImage${candyIdValue}`" placeholder="Image URL">
            </form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- When clicked, the form will show up on the page -->
                <v-btn text @click="dialog = false">Close</v-btn>
                <!-- When clicked, the function is called to edit candy posts -->
                <v-btn text @click="dialog = false; editCandy()">Post</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    // Importing axios and cookies
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "edit-candy",

        // Receiving the candy id and user id from the GetCandy component
        props: {
            candyIdValue: Number,
            userIdValue: Number
        },

        data() {
            return {
                // The dialog is initially not opened until the user clicks on the edit button
                // Initializing an object to store the index and post of the edited candy post
                dialog: false,
                editedCandyPost: {
                    index: undefined,
                    post: undefined
                }
            }
        },

        methods: {
            // Creating a PATCH request to edit data about the user's candy posts
            editCandy() {
                this.$store.commit("updateRequestStatus", "");
                // Configuring the request with the url, type, data type and the user's data
                axios.request({
                    url: `${process.env.VUE_APP_API_URL}/candy`,
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        loginToken: cookies.get("userData").loginToken,
                        candyId: this.candyIdValue,
                        name: document.getElementById(`editCandyName${this.candyIdValue}`).value,
                        description: document.getElementById(`editCandyDescription${this.candyIdValue}`).value,
                        priceInDollars: parseFloat(document.getElementById(`editCandyPrice${this.candyIdValue}`).value),
                        imageUrl: document.getElementById(`editCandyImage${this.candyIdValue}`).value
                    }
                }).then((res) => {
                    // If the network is done and there are no errors, store the returned data so it can be sent to the store
                    res;
                    this.editedCandyPost.post = res.data;

                    // For each column in every row of the candies array, find the column that belongs to the candy id
                    for(let i = 0; i < this.candies.length; i++) {
                        for(let j = 0; j < this.candies[i].length; j++) {
                            // If a column matches the candy id value, store the row as the index
                            if(this.candies[i][j] === this.candyIdValue) {
                                this.editedCandyPost.index = i;
                            }
                        }
                    }
                    // Removing the old candy post at that index
                    this.$store.commit("removeCandy", this.editedCandyPost.index);
                    // Replacing the old candy post with the edited candy post
                    this.$store.commit("updateCandy", this.editedCandyPost);
                }).catch((err) => {
                    // If the network is done but the page errors, print an error message to the user
                    err;
                    this.$store.commit("updateRequestStatus", "Failed to edit candy post. Please try again.");
                });
            }
        },

        computed: {
            // Getting all candy posts from the store
            candies() {
                return this.$store.state.allCandies; 
            }
        },
    }
</script>

<style scoped>
    form {
        display: grid;
        place-items: center;
        row-gap: 3vh;
        margin: 1vh 0vh;
    }

    .v-card__title {
        font-family: var(--bodyFont);
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

    .v-btn {
        font-family: var(--bodyFont);
    }

    @media only screen and (min-width: 768px) {
        input, textarea {
            width: 65%;
            padding: 3% 1%;
        }
    }
</style>