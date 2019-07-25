import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/config';



class BlogLand extends React.Component{
    constructor(){
        super()
        this.state = {
            blogs:[]
        }
    }

    componentDidMount(){
        axios.get('/blog/list',{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                console.log(response.data)
                this.setState(()=>({
                    blogs: response.data
                }))
            })
    }
    render(){
        return(
            <div className="container pt-sm-5 col-sm-8">
                <div className="Row">
                    <h1 className="text-center">Explore More Blogs...</h1>
                        <div>
                        <table>
                   <tbody>
                       <td className="row pt-sm-5">
                       
                    {
                      this.state.blogs &&  this.state.blogs.map(blog=>{
                            return <tr key = {blog._id} className="col-md-4">
                                        <div>
                                            <div className="card">
                                            <img src={blog.image} class="card-img-top" alt="blog"/>
                                                <div className="card-body">
                                                    <Link to = {`/blog/show/${blog._id}`}><h5 className="card-title">{blog.title}</h5></Link>
                                                    
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

                </div>
            </div>

            // <div>
            //     <ul>
            //        {this.state.blogs &&  
            //             this.state.blogs.map(blog=>{
            //                 return <li key = {blog._id}><Link to = {`/blog/show/${blog._id}`}>{blog.title}</Link></li>
            //             })
            //         }
            //     </ul>
            // </div>
        )
    }
}



export default BlogLand