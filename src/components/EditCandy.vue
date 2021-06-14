<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">Edit</v-btn>
        </template>
        <v-card>
            <v-card-title class="text-center">Edit Your Candy</v-card-title>
            <form id="editCandyForm" action="javascript:void(0)">
                <input type="text" id="editCandyName" placeholder="Name">
                <textarea id="editCandyDescription" cols="25" rows="3" placeholder="Description"></textarea>
                <input type="text" id="editCandyPrice" placeholder="Price($)">
                <input type="URL" id="editCandyImage" placeholder="Image URL">
            </form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false" text>Close</v-btn>
                <v-btn text @click="dialog = false; editCandy()">Post</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import axios from "axios";
    import cookies from "vue-cookies";

    export default {
        name: "edit-candy",

        props: {
            candyIdValue: Number,
            userIdValue: Number
        },

        data() {
            return {
                dialog: false
            }
        },

        methods: {
            editCandy() {
                axios.request({
                    url: "http://127.0.0.1:5000/candy",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        userId: cookies.get("userData").id,
                        candyId: this.candyIdValue,
                        name: document.getElementById("editCandyName").value,
                        description: document.getElementById("editCandyDescription").value,
                        priceInDollars: parseFloat(document.getElementById("editCandyPrice").value),
                        imageUrl: document.getElementById("editCandyImage").value
                    }
                }).then((res) => {
                    console.log(res);
                    this.$store.dispatch("getCandy");
                }).catch((err) => {
                    console.log(err);
                    this.$store.dispatch("getCandy");
                });

                document.getElementById("editCandyForm").reset();
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
        border-bottom: 1.5px solid var(--accentColor);
        font-family: var(--bodyFont);
        font-size: 0.9rem;
    }

    input:focus, textarea:focus {
        outline: none;
    }

    .v-btn {
        font-family: var(--bodyFont);
    }
</style>