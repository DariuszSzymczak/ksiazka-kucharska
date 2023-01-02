<template>
    <table id="product-list">
        <tr class="product-list-item" v-for="item in props.list">
            <td>
                <div class="product-list-item-td" @click="props.onClick(item)">
                    {{ item.nazwa }}
                    <img src="../assets/feather/x.svg" />
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    list: Array,
    onClick: Function
})

</script>

<style scoped lang="scss">
@import "../theme";
table {
    margin: 5%;
    width: 90%;
    background-color: $paper-yelow-light;
    border-collapse: collapse;
    td {
        width: 100%;
        border: 0.2vw solid $paper-yellow-dark;
    }
}

.product-list-item-td{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 0;
}
</style>