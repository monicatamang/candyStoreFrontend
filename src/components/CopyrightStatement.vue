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

    @media only screen and (min-width: 375px) and (orientation: landscape) {
        div {
            margin-bottom: 5vh;
        }
    }

    @media only screen and (min-width: 768px) {
        p {
            font-size: 0.9rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        div {
            display: none;
        }
    }
</style>