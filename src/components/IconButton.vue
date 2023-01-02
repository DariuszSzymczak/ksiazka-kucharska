<template>
    <div @click="onClick"  :class=" reverse ? 'reverse icon-button' : 'icon-button' ">
        {{ text }}
        <img :src="path" />
    </div>
</template>


<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    icon: String,
    text: String,
    onClick: Function,
    reverse: Boolean
})
const path = ref(new URL(`../assets/feather/${props.icon}.svg`, import.meta.url));

</script>

<style scoped lang="scss">
@import "../theme";
.icon-button {
    background: $secondary-red-light;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 2vw;
    font-size:1.6vw;
    border-bottom: 0.2vw solid $primary-red-dark; 
    cursor: pointer;
    img {
        filter: invert(100%) sepia(0%) saturate(7455%) hue-rotate(54deg)
            brightness(99%) contrast(110%);
            margin-left: 1vw;
            width:1.5vw;
    }

    &:hover{
        background: $primary-red-medium;
    }
}

.reverse{
   flex-direction: row-reverse;
}
</style>