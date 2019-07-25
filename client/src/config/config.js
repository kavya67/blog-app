import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3006/'
    // baseURL:'/'
})

export default axios