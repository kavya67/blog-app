import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/config';

class BlogShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blog: {}
        }
    }
    componentDidMount(){
        // console.log('id',this.props.match.params.id)
        const id = this.props.match.params.id
        axios.get(`/blog/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                // console.log(response.data)
                this.setState(()=>({blog: response.data}))

            })
    }
    render(){
        // console.log('id',this.props.match.params.id)
        return(
            <div>
                <h2>{this.state.blog.title}</h2>
                <p>{this.state.blog.description}</p>
            </div>
        )
    }



}



export default BlogShow