<template>
    <v-btn small @click="deleteCandy()">Delete</v-btn>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "delete-candy",

        data() {
            return {
                id: cookies.get("userData").id
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
                }).catch((err) => {
                    console.log(err);
                });
            }
        }

    }
</script>

<style scoped>

</style>