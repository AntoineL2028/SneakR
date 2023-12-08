<template>
        <article class="sneaker_card">
            <img class="img" :src="sneaker['image.small']" alt="image of sneakers">
            <p> {{ sneaker.name }} </p>
            <p>From ${{ sneaker.estimatedMarketValue }}</p>
            <button @click="add_wishlist()" class="button">
                <img class="heart" id="btnHeart" :src="currentSrc" alt="black heart">
            </button>
            <button class="button">
                <img class="box" src="assets/box_collection.png" alt="box collection">
            </button>
        </article>
</template>

<script setup lang="ts">
const props = defineProps(["sneaker"])
let currentSrc = ref("assets/blackHeart.png")
function add_wishlist() {
    if (currentSrc.value.endsWith('assets/blackHeart.png')) {
        currentSrc.value = 'assets/redHeart.png'
        console.log(props.sneaker)
    } else {
        currentSrc.value = 'assets/blackHeart.png'
    }
}
</script>

<style>

.img {
    background-color: #F0F0F2;
}
.heart {
    width: 50px;
    height : 40px;
}
.box {
    width: 50px;
    height: 40px;
}
.button {
    background-color: white;
    border: none;
}
</style>