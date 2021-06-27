<template>
    <!-- When clicked, the function is called and will delete a candy post -->
    <v-btn dark outlined color="#F25287" @click="deleteCandy">Delete</v-btn>
</template>

<script>
    // Import axios and cookies
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "delete-candy",

        data() {
            // Getting the user's id from their cookie
            return {
                id: cookies.get("userData").id,
            }
        },

        // Receiving the candy id and user id from the GetCandy component
        props: {
            candyIdValue: Number,
            userIdValue: Number
        },

        methods: {
            // Creating an DELETE request that will delete a candy post given the user's id and candy post id
            deleteCandy() {
                this.$store.commit("updateRequestStatus", "");
                // Configuring the request with the url, type, data type, candy id and user id
                axios.request({
                    url: `${process.env.VUE_APP_API_URL}/candy`,
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        candyId: this.candyIdValue,
                        loginToken: cookies.get("userData").loginToken,
                    }
                }).then((res) => {
                    // Finding the index of candy post that the user wants to delete
                    // For each post in the candies array, find the post which matches with the candy id
                    res;
                    for(let i = 0; i < this.candies.length; i++) {
                        for(let j = 0; j < this.candies[i].length; j++) {
                            // If the candy id is found in one of the posts, set the index of the post as a variable and commit the value to the store
                            if(this.candies[i][j] === this.candyIdValue) {
                                let index = i;
                                this.$store.commit("removeCandy", index);
                            }
                        }
                    }
                    // Calling the getCandy function from the store to update the page and show all posts with the changes
                    this.$store.dispatch("getCandy");
                }).catch((err) => {
                    // If the network is done but the page errors, print an error message to the user
                    err;
                    this.$store.commit("updateRequestStatus", "Failed to delete candy post. Please try again.");
                });
            }
        },

        computed: {
            // Getting all the candy posts from the store
            candies() {
                return this.$store.state.allCandies; 
            }
        },
    }
</script>

<style scoped>

</style>