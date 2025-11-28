import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../page/mainPage.vue";


const routes = [
    { path: '/', name: 'Home', component: mainPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
