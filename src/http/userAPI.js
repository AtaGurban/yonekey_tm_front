import { $authhost, $host } from ".";
import jwt_decode from 'jwt-decode'


export const registration = async (email, name, password, phone, forCRM)=>{

    const {data} = await $host.post('api/user/registration', {email, password, name, phone, forCRM})
    
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const createUserByAdmin = async (item)=>{
    const {data} = await $host.post('api/user/create', item)
    return jwt_decode(data.token)
}

export const login = async (phone, password)=>{
    const {data} = await $host.post('api/user/login', {phone, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async ()=>{
    const {data} = await $authhost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const update = async (item)=>{
    const {data} = await $authhost.put('api/user/update', item)
    return data
}

export const getAllUsers = async (page)=>{
    const {data} = await $authhost.get(`api/admin/get-users?page=${page}`)
    return data
}

export const getOneUsers = async (id)=>{
    const {data} = await $authhost.get(`api/user/get-user?id=${id}`)
    return data
}

export const removeUser = async (id)=>{
    const {data} = await $authhost.delete(`api/user/remove?id=${id}`)
    return data
}
