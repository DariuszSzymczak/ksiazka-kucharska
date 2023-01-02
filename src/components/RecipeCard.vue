<template>
    <WhiteCard :noPadding="true">
        <div class="recipe-card-outer-box">
            <img src="../assets/dinner.png" />
            <div class="recipe-card-inner-box">
                <div class="row-right">
                    <img v-if="props.item.trudnosc === 'easy'" src="../assets/easy.png" />
                    <img v-if="props.item.trudnosc === 'medium'" src="../assets/medium.png" />
                    <img v-if="props.item.trudnosc === 'hard'" src="../assets/hard.png" />
                </div>
                <div class="row-left">
                    <h2>{{ props.item.nazwa }}</h2>
                </div>
                <div class="row-right">
                    <IconButton icon="eye" text="zobacz przepis" :onClick="openRecipe"></IconButton>
                </div>
            </div>
        </div>
    </WhiteCard>
</template>


<script setup>
import { defineProps} from 'vue';
import WhiteCard from './WhiteCard.vue';
import IconButton from './IconButton.vue';

const props = defineProps({
    height: String,
    item: Object,
    openRecipe: Function
})



</script>

<style scoped lang="scss">
.recipe-card-outer-box {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    img {
        padding: 1vw;
        width: 20%;
    }
}

.recipe-card-inner-box {
    width: 80%;
    display: flex;
    flex-direction: column;
    img {
        padding: 1vw;
        width: 30%;
    }

    h2 {
        text-align: left;
        font-size: 1.4vw;
        font-weight: normal;
    }
}

.row-left,
.row-right {
    width: 100%;
    display: flex;
}

.row-left {
    text-align: left;
    justify-content: flex-start;
}

.row-right {
    text-align: right;
    justify-content: flex-end;
}
</style>