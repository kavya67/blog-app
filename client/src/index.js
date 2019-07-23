import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/config'
import {Provider} from 'react-redux'

import App from './App'
import configureStore from './store/ConfigureStore'
import {setUser} from './action/userAction'
import {setBlog} from './action/blogsAction'

const store = configureStore()
store.subscribe(()=>{
    console.log('redux store app' , store.getState())
})

if(localStorage.getItem('userAuthToken')){
    axios.get('/users/account', {
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
        .then(response=>{
            store.dispatch(setUser(response.data))
        })

    axios.get('/blog', {
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
        .then(response=>{
            store.dispatch(setBlog(response.data))
        })

}

const jsx = <Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(jsx,document.getElementById('root'))