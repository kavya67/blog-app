import React from 'react'
import axios from '../../config/config'
import {connect} from 'react-redux'
import Form from './Form'

class BlogEdit extends React.Component{
    constructor(){
        super()

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
        axios.put(`/blog/${this.props.blog._id}`, formData , {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                console.log(response.data.errors)
               
            }else{
                this.props.history.push(`/users/account`)
            }
        })
    }

    render(){
        return(
            <div>
                <Form  blog= {this.props.blog} handleSubmit= {this.handleSubmit}/>
            </div>
        )
    }

}

const mapStateToProps = (state,props)=>{
    return {
        blog: state.blogs.find(blog=>{
            return blog._id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogEdit)