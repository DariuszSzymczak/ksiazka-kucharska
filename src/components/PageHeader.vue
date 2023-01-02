<template>
    <div id="Page-header">
        <img src="../assets/mandala.png" class="decoration-mandala" />
        <div class="header-content">
            <h1 class="header-content">Orientalna książka kucharska</h1>
            <img class="header-content" id="dragon" src="../assets/dragon.png" />
        </div>
        <img class="decoration-mandala rotate" src="../assets/mandala.png" />
    </div>
    <div id="red-label"></div>
    <div id="lampions">
        <img src="../assets/lampion.png" />
        <img src="../assets/lampion.png" />
    </div>
</template>

<script setup>

</script>

<style  lang="scss">
@import "../theme";

#Page-header {
    width: 80vw;
    margin:auto;
    display: flex;
    background-color: $primary-red-medium;
    height: 28vh;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    h1 {
        color: $gold;
        text-align: center;
        text-transform: uppercase;
        font-size: 2.5vw;
    }
}

#dragon {
    width: 23vw;
}
.decoration-mandala {
    height: 25vh;
    margin: 2vw;
}

.rotate {
    transform: rotate(90deg);
}

.header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#lampions {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    img {
        padding: 0vw 2vw;
        width: 7vw;
    }
}

#red-label,
#lampions {
    z-index: 1;
    width: 100vw;
    position: absolute;
    left: 0px;
    top: 26.2vh;
}

#red-label {
    background: $primary-red-dark;
    height: 1.2vw;
}
</style>