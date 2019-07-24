import React from 'react'
import Form from './Form'
import axios from '../../config/config';
import {addBlog} from '../../action/blogsAction'
import {connect} from 'react-redux'

class BlogNew extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
        axios.post('/blog', formData, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                this.props.dispatch(addBlog(response.data))
                this.props.history.push('/users/account')
            })

        

    }

    render(){
        return(
            <div>
                <h1>Create Blog</h1>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}

export default connect()(BlogNew)