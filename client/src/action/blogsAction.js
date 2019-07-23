export const setBlog = (value)=>{
    return {type:"SET_BLOG", payload: value}
}

export const addBlog = (value)=>{
    return {type:"ADD_BLOG", payload: value}
}

export const removeBlog = (value)=>{
    return {type:"REMOVE_BLOG", payload: value}
}

export const resetBlog = ()=>{
    return {type:"RESET_BLOG"}
}