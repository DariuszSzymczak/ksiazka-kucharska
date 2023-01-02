import HomePage from '../views/HomePage.vue'
import RecipePage from '../views/RecipePage.vue'
export default [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/recipe',
    name: 'RecipePage',
    component: RecipePage
  } 
];