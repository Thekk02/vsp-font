import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store/store";
import request from "@/utils/request";
import {authShow} from "@/utils/authtil";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from "element-plus";
import echarts from "echarts";

const app = createApp(App);

app.use(ElementPlus, {
    locale: zhCn,
})
app.config.globalProperties.$auth = authShow;
app.config.globalProperties.$request =request;
app.config.globalProperties.$echarts = echarts;
app.use(store)
app.use(router)
app.mount('#app')

