import { $authhost, $host } from ".";


export const createBusiness = async (item)=>{
    const {data} = await $authhost.post('api/admin/business', item)
    return data
}
export const getBusiness = async ()=>{
    const {data} = await $host.get('api/admin/business')
    return data
}