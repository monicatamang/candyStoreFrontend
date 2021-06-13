<template>
    <v-btn small @click="deleteCandy(candyId)">Delete</v-btn>
</template>

<script>
    import axios from "axios";

    export default {
        name: "delete-candy",

        props: {
            candyId: Number
        },

        methods: {
            deleteCandy(candyId) {
                axios.request({
                url: "http://127.0.0.1:5000/candy",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    id: candyId
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