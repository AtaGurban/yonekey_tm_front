import { $authhost, $host } from ".";



export const createVideo = async (item, options)=>{
    const {data} = await $authhost.post('api/admin/create-video', item, options)
    return data

}


export const getAllVideos = async (page)=>{
    const {data} = await $host.get(`api/video/list?page=${page}`)
    return data
}


export const removeVideo = async (id)=>{
    const {data} = await $authhost.delete(`api/admin/remove-video?id=${id}`)
    return data
}


export const updateVideoApi = async (item)=>{
    const {data} = await $authhost.put('api/admin/update-video', item)
    return data
}