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
            <div className="container pt-sm-5 col-sm-8">
               <div  className="card">
                   <div className="card-body">
                        <h5 className="card-title text-center">Create Blog</h5>
                        <Form handleSubmit = {this.handleSubmit}/>
                   </div>
               </div>
            </div>
        )
    }
}

export default connect()(BlogNew)