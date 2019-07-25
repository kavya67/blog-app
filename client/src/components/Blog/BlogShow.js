import React from 'react'
import {Link} from 'react-router-dom'
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
            <div className="container pt-sm-5 col-sm-6">
                <div className="Row">
                    <div className="card">
                        <div className="card-body">
                        <h2 className="card-title">{this.state.blog.title}</h2>
                        <p>{this.state.blog.description}</p>
                    </div>
                </div>
            </div><br/>
                    <Link to="/blog/all" className="btn btn-outline-info btn-sm"> Back </Link>
                
            </div>
        )
    }



}



export default BlogShow