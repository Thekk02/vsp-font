import {createRouter, createWebHistory} from "vue-router";
import * as process from "echarts";
import {getItem} from "@/utils/storage.js";


const routes =[
    {
        path: '/login',
        name: 'login',
        component:() => import('@/views/LoginPage.vue')
    },
    {
        path: '/',
        component:() => import('@/views/LoginPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next) =>{
    if(to.href === '/login' || to.href === 'register'){
        next()
    }else {
        if (to.href != '/login' && getItem("TOKEN_INFO_KEY") === null) {
            next('/login')

        } else {
            next()
        }
    }
})

export default router
