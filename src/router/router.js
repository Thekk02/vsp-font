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
        path: '/index',
        name: 'index',
        component:() => import('@/views/IndexPage.vue')
    },
    {
        path: '/RadiatorOrderInquiry',
        name: 'RadiatorOrderInquiry',
        component:() => import("@/views/radiator/RadiatorOrderInquiry.vue")
    },
    {
        path:'/woodfish',
        name:'woodfish',
        component:() => import ('@/views/entertainment/WoodFish.vue')
    },
    {
        path:'/TwoZeroFourEight',
        name:'TwoZeroFourEight',
        component:() => import ('@/views/entertainment/TwoZeroFourEight.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next) =>{
    if(to.href === '/login' || to.href === '/register' || to.href === '/index' || to.href === '/RadiatorOrderInquiry'  || to.href === '/woodfish' || to.href === '/TwoZeroFourEight'  ){
        next()
    }
    else {
        if (to.href != '/login' && getItem("TOKEN_INFO_KEY") === null) {
            next('/login')

        } else {
            next()
        }
    }
})

export default router
