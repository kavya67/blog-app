import {createStore, combineReducers} from 'redux'
import userReducer from '../reducer/userReducer'
import blogsReducer from '../reducer/blogsReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user: userReducer,
        blogs: blogsReducer
    }))
    return store
}

export default configureStore