<template>
    <div>
        <p>Copyright 2021 Candy Post</p>
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
        margin-top: 3vh;
    }

    p {
        font-family: var(--bodyFont);
        font-size: 0.8rem;
        color: rgb(114, 114, 114);
    }

    .v-application p {
        margin-bottom: 0px;
    }
</style>