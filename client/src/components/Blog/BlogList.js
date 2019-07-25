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
            <div className="pt-sm-5">                        
               <table>
                   <tbody>
                       <td className="row">
                       
                    {
                        this.props.blogs.map(blog=>{
                            return <tr key = {blog._id} className="col-sm-4">
                                        <div>
                                            <div className="card">
                                            <img src={blog.image} class="card-img-top" alt="image"/>
                                                <div className="card-body">
                                                <Link to = {`/blog/show/${blog._id}`} ><h5 className="card-title">{blog.title}</h5></Link>
                                                <Link to = {`/blog/edit/${blog._id}`} className="btn btn-outline-info btn-sm">Edit</Link><span> </span>
                                                <button className="btn btn-outline-info btn-sm" onClick= {()=>{this.handleDelete(blog._id)}}>Remove</button>
                                                </div>
                                            </div><br/>
                                        </div>
                                </tr>
                            })
                    
                    }
                
                       </td>
                   </tbody>
               </table>
        </div>

        //    <div className="row">
        //        <div className="col-sm-6">
        //            <div className="card">
                        
        //                     <ul>
        //                         {
        //                             this.props.blogs.map(blog=>{
        //                                 return <li key = {blog._id} className="card-body">
        //                                     <Link to = {`/blog/show/${blog._id}`} className="card-title">{blog.title}</Link>
        //                                     <Link to = {`/blog/edit/${blog._id}`}>Edit</Link>
        //                                     <button onClick= {()=>{this.handleDelete(blog._id)}}>Remove</button>
        //                                 </li>
        //                             })
        //                         }
        //                     </ul>
                    
        //            </div>
        //        </div>
        //    </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogList)