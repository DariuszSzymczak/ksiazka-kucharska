<template>
    <div class="search-bar">
        <input
            type="text"
            class="search-bar-input"
            :placeholder="props.placeholder"
            v-model="inputVal"
            @input="filterProdusts()"
        />
        <img src="../assets/feather/search.svg" />
    </div>
    <div id="searched-product-list">
        <div v-if="listOpen" v-for="item in props.list" @click="selectProduct(item)">{{ item.nazwa }}</div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
const listOpen = ref(false);
const inputVal = ref('');


const props = defineProps({
    selectElement: Function,
    enterText: Function,
    placeholder: String,
    list: Object
})

const filterProdusts = () => {
    if (inputVal.value.length > 0) {
        listOpen.value = true;
    } else {
        listOpen.value = false;
    }

    props.enterText(inputVal.value);
}

const selectProduct = (product) => {
    props.selectElement(product);
    inputVal.value = '';
    listOpen.value = false;
}



</script>




<style lang="scss" scoped>
@import "../theme";

.search-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 80%;
    padding: 1vw 5%;

    margin: 2% 5%;
    border: 1px solid $primary-red-medium;
    background-color: $primary-red-light;
    border-radius: 1vw;

    img {
        width: 2vw;
        position: relative;
    }

    .search-bar-input {
        background: transparent;
        border: none;
        width: 100%;
    }
}

#searched-product-list {
    background: $primary-red-light;
    width: 47vw;
    text-align: center;
    z-index: 20;
    div {
        border-bottom: 0.2vw solid $primary-red-medium;
        padding: 1vw 0;
        cursor: pointer;
        &:hover {
            background-color: $primary-red-medium;
        }
    }
}
</style>