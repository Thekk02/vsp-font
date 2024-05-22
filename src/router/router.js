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
        path: '/plmapp1',
        name: '/plmapp1',
        component:() => import("@/views/plm/OrderInquiry.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next) =>{
    if(to.href === '/login' || to.href === '/register' || to.href === '/index' || to.href === '/plmapp1'){
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
