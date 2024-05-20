import {createStore} from 'vuex'
import {setItem,getItem} from "@/utils/storage.js";

const TOKEN_INFO_KEY = "TOKEN_INFO_KEY"

export default createStore({
    state:{
        user: getItem(TOKEN_INFO_KEY)
    },
    getters: {},
    mutations: {
        setUser(state, data){
            state.user = data
            setItem(TOKEN_INFO_KEY,data)
        }
    },
    actions: {},
    modules: {}
})


