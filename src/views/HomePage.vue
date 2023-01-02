<template>
    <PageHeader></PageHeader>
    <div class="main-box">
        <MainGrid>
            <template v-slot:left-sidebar-data>
                <WhiteCard>
                    <h1>wyszukiwarka przepisów</h1>
                    <SearchBar
                        placeholder="Wpisz nazwę produktu"
                        :list="productsList"
                        :selectElement="selectProduct"
                        :enterText="getProducts"
                    ></SearchBar>
                </WhiteCard>
                <Divider height="3vw"></Divider>
                <h1>Wyszukane Przepisy</h1>
                <Divider height="1vw"></Divider>

                <div v-for="item in recipes">
                    <RecipeCard :item="item" :openRecipe="() => { openRecipe(item) }"></RecipeCard>
                    <Divider height="2vw"></Divider>
                </div>
            </template>
            <template v-slot:right-sidebar-data>
                <WhiteCard>
                    <h1>zaznaczone produkty</h1>
                    <ProductsList :list="selectedProducts" :onClick="removeItem"></ProductsList>
                </WhiteCard>
            </template>
        </MainGrid>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import PageHeader from '../components/Pageheader.vue'
import MainGrid from '../components/MainGrid.vue';
import WhiteCard from '../components/WhiteCard.vue';
import SearchBar from '../components/SearchBar.vue';
import Divider from '../components/Divider.vue';
import RecipeCard from '../components/RecipeCard.vue';
import ProductsList from '../components/ProductsList.vue';
import { useRouter } from 'vue-router'
import api from '../composables/api';
const productsList = ref([]);
let selectedProducts = ref([]);
let recipes = ref([]);
const router = useRouter();
// recipes list

const getRecipes = () => {
    const isFirst = selectedProducts.value.length === 1;

    if (isFirst) {
        api('przepisy', { id: selectedProducts.value[0].id }, (res) => {
            recipes.value = res.data;
        })
    } else {
        filterRecipes();
    }
}

const filterRecipes = () => {
    api('filter', { id: selectedProducts.value[selectedProducts.value.length - 1].id }, (res) => {

        let filteredList = [];
        recipes.value.forEach(recipe => {
            res.data.forEach(item => {
                if (recipe.id === item.przepisId) {
                    filteredList.push(recipe);
                }
            })
        })

        recipes.value = filteredList;
    })
}

function openRecipe(item) {
    window.recipe = item;
    router.push('recipe');
}



// products list

const getProducts = (filter) => {
    if (filter) {

        let newList = [];
        api('produkty', { filter }, (rows) => {
            rows.forEach(item => {
                newList.push(item);
            })
            productsList.value = newList;
        })


        // axios.post('http://localhost:8000/api/produkty', { filter }).then((res) => {
        //     console.log(res.data)
        //     let newList = [];
        //     res.data.forEach(item => {
        //         newList.push(item.nazwa);
        //     })
        //     productsList.value = newList;
        // }).catch(err => { console.log(err) })
    }
}

const selectProduct = (product) => {

    selectedProducts.value.push(product);
    getRecipes();
}

const removeItem = (item) => {
    selectedProducts.value = selectedProducts.value.filter(product => product !== item);
    if (selectedProducts.value.length === 0) {
        recipes.value = [];
    } else {
        getRecipes();
    }
}

</script>


<style scoped lang="scss">
@import "../theme";

h1 {
    font-weight: normal;
    margin: 0;
    padding: 0;
    margin-left: 5%;
    font-size: 1.5vw;
    text-transform: uppercase;
}

.main-box {
    position: relative;
    z-index: 10;
    width: 80vw;
    margin: auto;
    background: $ghost-light;
}
</style>