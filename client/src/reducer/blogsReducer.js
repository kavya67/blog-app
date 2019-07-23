const blogsReducer = (state = [], action)=>{
    switch(action.type){
        case 'SET_BLOG': {
            return [...action.payload]
        }
        case 'ADD_BLOG': {
            return [...state, action.payload]
        }
        case 'RESET_BLOG': {
            return []
        }
        case 'REMOVE_BLOG': {
            return state.filter(blog=>{
                return blog._id !== action.payload
            })
        }
        default: {
            return [...state]
        }

    }
}

export default blogsReducer