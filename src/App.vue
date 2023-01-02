<template>
    <router-view></router-view>
</template>

<script setup>

</script>


<style lang="scss">
@import "theme";
* {
    font-family: arial;
}

body {
    background: rgb(255, 192, 172);
    background: linear-gradient(
        180deg,
        rgba(255, 192, 172, 1) 0%,
        rgba(240, 240, 240, 1) 100%
    );
}
</style>
