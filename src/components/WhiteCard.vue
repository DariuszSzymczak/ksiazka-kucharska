<template>
    <div :style="cardStyle">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    noPadding: Boolean
})


let cardStyle = {
    padding: props.noPadding ? '0' : '2vw 0',
    width: '100%',
    background: 'white'
}


</script>

<style scoped lang="scss">
.white-card {
    width: 100%;
    background-color: white;
    padding: 2vw 0;
}
</style>