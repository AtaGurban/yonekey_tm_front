import { $authhost, $host } from ".";


export const createSlider = async (item)=>{
    const {data} = await $authhost.post('api/main-page/slider', item)
    return data
}

export const getSlider = async (number)=>{
    const {data} = await $host.get(`api/main-page/slider?number=${number}`)
    return data
}

export const getAllSlider = async ()=>{
    const {data} = await $host.get(`api/main-page/slider-all`)
    return data
}

export const updateSlider = async (item)=>{
    const {data} = await $authhost.put('api/main-page/slider', item)
    return data
}

export const deleteSlider = async (id)=>{
    const {data} = await $authhost.delete(`api/main-page/slider?id=${id}`)
    return data
}

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