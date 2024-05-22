import {getItem} from "@/utils/storage.js"

export const authShow = (name) =>{
    let role = getItem('TOKEN_INFO_KEY').role
    return role === name
}

export const getUser = () =>{
    return getItem('TOKEN_INFO_KEY').user
}