import { $authhost, $host } from ".";


export const createSlider = async (item)=>{
    const {data} = await $authhost.post('api/main-page/slider', item)
    return data
}

export const createTitleCategory = async (item)=>{
    const {data} = await $authhost.post('api/main-page/title-category', item)
    return data
}

export const createTitleSubCategory = async (item)=>{
    const {data} = await $authhost.post('api/main-page/title-sub-category', item)
    return data
}


export const createCategory = async (item)=>{
    const {data} = await $authhost.post('api/main-page/category', item)
    return data
}

export const clickCategory = async (item)=>{
    const {data} = await $host.post('api/main-page/category/click', item)
    return data
}

export const updateCategory = async (item)=>{
    const {data} = await $authhost.put('api/main-page/category', item)
    return data
}

export const getAllCategory = async ()=>{
    const {data} = await $host.get('api/main-page/category')
    return data
}

export const deleteCategory = async (id)=>{
    const {data} = await $host.delete(`api/main-page/category?id=${id}`)
    return data
}

export const createSubCategory = async (item)=>{
    const {data} = await $authhost.post('api/main-page/sub-category', item)
    return data
}

export const clickSubCategory = async (item)=>{
    const {data} = await $host.post('api/main-page/sub-category/click', item)
    return data
}

export const updateSubCategory = async (item)=>{
    const {data} = await $authhost.put('api/main-page/sub-category', item)
    return data
}

export const getAllSubCategory = async ()=>{
    const {data} = await $host.get('api/main-page/sub-category')
    return data
}

export const deleteSubCategory = async (id)=>{
    const {data} = await $host.delete(`api/main-page/sub-category?id=${id}`)
    return data
}

export const updateTitleCategory = async (item)=>{
    const {data} = await $authhost.put('api/main-page/title-category', item)
    return data
}

export const getTitleCategory = async ()=>{
    const {data} = await $host.get('api/main-page/title-category')
    return data
}

export const getTitleSubCategory = async ()=>{
    const {data} = await $host.get('api/main-page/title-sub-category')
    return data
}

export const getOneCategoryItems = async (id)=>{
    const {data} = await $host.get(`api/main-page/title-sub-category?id=${id}`)
    return data
}

export const getTitleCategoryWithCategory = async ()=>{
    const {data} = await $host.get('api/main-page/title-category?category=true')
    return data
}

export const deleteTitleCategory = async (id)=>{
    const {data} = await $authhost.delete(`api/main-page/title-category?id=${id}`)
    return data
}

export const deleteTitleSubCategory = async (id)=>{
    const {data} = await $authhost.delete(`api/main-page/title-sub-category?id=${id}`)
    return data
}

export const updateTitleSubCategory = async (item)=>{
    const {data} = await $authhost.put(`api/main-page/title-sub-category`, item)
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

export const deleteBusiness = async (id)=>{
    const {data} = await $authhost.delete(`api/admin/business?id=${id}`)
    return data
}

export const clickBusiness = async (id)=>{
    const {data} = await $authhost.post('api/admin/business-click', {id})
    return data
}

export const createMobileAds = async (item)=>{
    const {data} = await $authhost.post('api/main-page/mobile-ads', item)
    return data
}
export const getMobileAds = async ()=>{
    const {data} = await $host.get('api/main-page/mobile-ads/get')
    return data
}

export const deleteMobileAds = async (id)=>{
    const {data} = await $authhost.delete(`api/main-page/mobile-ads?id=${id}`)
    return data
}