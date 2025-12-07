import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../page/mainPage.vue";
import readPage from "../page/readPage.vue";
import subscribePage from "../page/subscribePage.vue";
import writePage from "../page/writePage.vue";
import submitPage from "../page/submitPage.vue";


const routes = [
    { path: '/', name: 'Home', component: mainPage },
    { path: '/read', name: 'Read', component: readPage },
    { path: '/subscribe', name: 'Subscribe', component: subscribePage },
    { path: '/writestory', name: 'Write', component: writePage},
    { path: '/submitted', name: 'Submit', component: submitPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
