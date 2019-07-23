import {createStore, combineReducers} from 'redux'
import userReducer from '../reducer/userReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user: userReducer,
        // blogs: blogsReducer
    }))
    return store
}

export default configureStore