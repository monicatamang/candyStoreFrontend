<template>
    <div>
        <p>Copyright 2021 Candy Store</p>
    </div>
</template>

<script>
    export default {
        name: "copyright-statement"
    }
</script>

<style scoped>
    div {
        display: grid;
        place-items: center;
        width: 100%;
    }

    p {
        font-family: var(--bodyFont);
        font-size: 0.8rem;
    }

    .v-application p {
        margin-bottom: 0px;
    }
</style>