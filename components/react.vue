<template>
    <div class="allButton">
                        <button @click="add_wishlist()" class="button">
                            <img class="heart" id="btnHeart" :src="currentSrc" alt="black heart">
                        </button>
                        <button class="button">
                            <img class="box" src="../assets/box_collection.png" alt="box collection">
                        </button>
                    </div>
</template>

<script setup lang="ts">
const props = defineProps(["sneaker"])
let currentSrc = ref("assets/blackHeart.png")
function add_wishlist() {
    if (currentSrc.value.endsWith('../assets/blackHeart.png')) {
        currentSrc.value = '../assets/redHeart.png'
        console.log(props.sneaker)
    } else {
        currentSrc.value = '../assets/blackHeart.png'
    }
}
</script>

<style>
.heart {
    width: 40px;
    height : 30px;
}
.box {
    width: 40px;
    height: 30px;
}
.button {
    background-color: white;
    border: none;
    margin-bottom: 50px;
    position: relative;
    margin-top: 5px;
}
.allButton {
    margin-left: 80px;
}
</style>