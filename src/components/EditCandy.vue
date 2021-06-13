<template>
    <form id="editCandyForm" action="javascript:void(0)">
        <h3>Edit Candy</h3>
        <input type="text" id="editCandyName" placeholder="Name">
        <input type="text" id="editCandyDescription" placeholder="Description">
        <input type="text" id="editCandyPrice" placeholder="Price($)">
        <input type="text" id="editCandyImage" placeholder="Image URL">
    </form>
</template>

<script>
    export default {
        name: "edit-candy",

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