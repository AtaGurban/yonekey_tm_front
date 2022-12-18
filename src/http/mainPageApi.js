import { $authhost, $host } from ".";


export const createBusiness = async (item)=>{
    const {data} = await $authhost.post('api/admin/business', item)
    return data
}
export const getBusiness = async ()=>{
    const {data} = await $host.get('api/admin/business')
    return data
}
export const updateBusiness = async (item)=>{
    const {data} = await $authhost.put('api/admin/business', item)
    return data
}
export const clickBusiness = async (id)=>{
    const {data} = await $authhost.post('api/admin/business-click', {id})
    return data
}

export const deleteBusiness = async (id)=>{
    const {data} = await $authhost.delete(`api/admin/business?id=${id}`)
    return data
}