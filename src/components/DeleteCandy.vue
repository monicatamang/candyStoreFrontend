<template>
    <v-btn @click="deleteCandy">Delete</v-btn>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "delete-candy",

        data() {
            return {
                id: cookies.get("userData").id,
            }
        },

        props: {
            candyIdValue: Number,
            userIdValue: Number
        },

        methods: {
            deleteCandy() {
                axios.request({
                    url: "http://127.0.0.1:5000/candy",
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        candyId: this.candyIdValue,
                        userId: this.id
                    }
                }).then((res) => {
                    console.log(res);
                    // this.$store.commit("removeCandy", this.candyIdValue);
                    for(let i = 0; i < this.candies[0].length; i++) {
                        for(let j = 0; j < this.candies[0][i].length; j++) {
                            if(this.candies[0][i][j] === this.candyIdValue) {
                                let index = i;
                                console.log(index);
                                this.$store.commit("removeCandy", index);
                            }
                        }
                    }
                    this.$store.dispatch("getCandy");
                }).catch((err) => {
                    console.log(err);
                });
            }
        },

        computed: {
            candies() {
                return this.$store.state.allCandies; 
            }
        },
    }
</script>

<style scoped>

</style>