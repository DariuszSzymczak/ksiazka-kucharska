<template>
<div class="divider" :style="{'height' : height}"></div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    height: String
})

</script>

<style scoped>
.divider{
    width: 100%;
}
</style>