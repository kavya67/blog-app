import React from 'react'
import {connect} from 'react-redux'

class BlogShow extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.blog.title}</h2>
                <p>{this.props.blog.description}</p>
            </div>
        )
    }



}

const mapToStateProps = (state, props)=>{
    return {
        blog: state.blogs.find(blog=>{
            return blog._id === props.match.params.id
        })
    }
}

export default connect(mapToStateProps)(BlogShow)