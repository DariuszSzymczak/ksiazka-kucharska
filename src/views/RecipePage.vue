<template>
    <PageHeader></PageHeader>
    <div class="main-box">
        <MainGrid>
            <template v-slot:left-sidebar-data>
                <WhiteCard>
                    <div class="center">
                        <h1>{{ recipe.nazwa }}</h1>
                        <img src="../assets/dinner.png" />
                        <Div id="przepis">{{ recipe.przepis }}</Div>
                        <Divider height="4vw"></Divider>
                        <IconButton icon="arrow-left" text="Powrót" :reverse="true" :onClick="back"></IconButton>
                    </div>
                </WhiteCard>
            </template>
            <template v-slot:right-sidebar-data>
                <WhiteCard>
                    <table>
                        <tr>
                            <th>skład</th>
                            <th>ilość</th>
                            <th>kcal</th>
                        </tr>
                        <tr v-for="item in details.data">
                            <td class="td-left">{{ item.nazwa }}</td>
                            <td class="td-left">{{ item.porcja * item.porcje }} {{ item.jednostka }}</td>
                            <td class="td-right">{{ item.kcal }}</td>
                        </tr>
                    </table>
                    <div id="suma">suma kcal: {{ sumaKcal }}</div>
                </WhiteCard>
            </template>
        </MainGrid>
    </div>
</template>


<script setup>
import PageHeader from '../components/Pageheader.vue'
import MainGrid from '../components/MainGrid.vue';
import WhiteCard from '../components/WhiteCard.vue';
import api from '../composables/api';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import IconButton from '../components/IconButton.vue';
import Divider from '../components/Divider.vue';
let recipe = window.recipe;
let details = ref([])
let sumaKcal = ref(0);
const router = useRouter();

onBeforeMount(() => {
    api('detail', { id: recipe.id }, (res) => {

        details.value = res;
        res.data.forEach((item) => {
            sumaKcal.value += item.kcal
        })

    })

})

const back = () =>{
    router.back();
}



</script>


<style scoped lang="scss">
@import "../theme";
.main-box {
    width: 80vw;
    height: 100vh;
    margin: auto;
    background: $ghost-light;
}

h1 {
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-left: 5%;
    font-size: 2vw;
    text-transform: uppercase;
}

#przepis {
    font-size: 1.6vw;
}

.center {
    text-align: center;
}
img {
    margin: 1vw;
}

table {
    width: 100%;
}

td {
    text-align: center;
    font-size: 1.6vw;
    border: 0.1vw solid black;
}

#suma {
    margin: 5%;
    border: 0.1vw solid black;
    width: 80%;
    padding: 5%;
}
</style>