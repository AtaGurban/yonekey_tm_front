export const localStorageSave = (param, newData)=>{
    if (localStorage.getItem(param) == null){
        localStorage.setItem(param, '[]')
    }
    let oldData = JSON.parse(localStorage.getItem(param))
    if (!oldData.includes(newData)){
        oldData.push(newData)
        localStorage.setItem(param, JSON.stringify(oldData))
    }
}

export const localStorageView = (param)=>{
    return localStorage.getItem(param)
}