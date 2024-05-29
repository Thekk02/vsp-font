import request from "@/utils/request";


//系统相关



export const login = (data) => {
    return request.post('/user/login',data)
}




export const RadiatorOrderInquiry = (data) => {
    return request.post('/RadiatorOrderInquiry', data)
}








