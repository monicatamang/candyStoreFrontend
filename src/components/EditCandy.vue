<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" small>Edit</v-btn>
        </template>
        <v-card>
            <v-card-title class="text-center">Candy Store</v-card-title>
            <v-card-subtitle>Edit Your Candy</v-card-subtitle>
            <form id="editCandyForm" action="javascript:void(0)">
                <h3>Edit Candy</h3>
                <input type="text" id="editCandyName" placeholder="Name">
                <input type="text" id="editCandyDescription" placeholder="Description">
                <input type="text" id="editCandyPrice" placeholder="Price($)">
                <input type="URL" id="editCandyImage" placeholder="Image URL">
            </form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false; editCandy(candyId)">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import axios from "axios";

    export default {
        name: "edit-candy",

        props: {
            candyId: Number
        },

        data() {
            return {
                dialog: false
            }
        },

        methods: {
            editCandy(candyId) {
                axios.request({
                    url: "http://127.0.0.1:5000/candy",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        id: candyId,
                        name: document.getElementById("editCandyName").value,
                        description: document.getElementById("editCandyDescription").value,
                        priceInDollars: parseFloat(document.getElementById("editCandyPrice").value),
                        imageUrl: document.getElementById("editCandyImage").value
                    }
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
    }
</script>

<style scoped>
    
</style>