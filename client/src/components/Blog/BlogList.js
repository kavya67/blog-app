import React from 'react'
import {connect} from 'react-redux'
import {setBlog} from '../../action/blogsAction'
import {removeBlog} from '../../action/blogsAction'
import {Link} from 'react-router-dom'
import axios from '../../config/config';



class BlogList extends React.Component{

    constructor(){
        super()
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        axios.get('/blog',{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                this.props.dispatch(setBlog(response.data))
            })
    }

    handleDelete(id){
        axios.delete(`/blog/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(()=>{
                const confirm = window.confirm('are you sure?')
            if(confirm){
                this.props.dispatch(removeBlog(id))
            }

            })

    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.blogs.map(blog=>{
                            return <li key = {blog._id}>
                                <Link to = {`/blog/show/${blog._id}`}>{blog.title}</Link>
                                <Link to = {`/blog/edit/${blog._id}`}>Edit</Link>
                                <button onClick= {()=>{this.handleDelete(blog._id)}}>Remove</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogList)