import React from 'react'
import axios from '../../config/config'
import {setUser} from '../../action/userAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import BlogList from '../Blog/BlogList'


class Account extends React.Component{

    componentDidMount(){
        axios.get('/users/account',{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                // console.log(response.data)
                this.props.dispatch(setUser(response.data))
            })
    }
    render(){   
        return(
            <div className="container pt-sm-5 col-sm-6"> 
                <div className="Row">
                    <h1 className="text-center">Welcome {this.props.user.username}</h1>
                        <BlogList/>
                    <Link to = "/blog/add" className="btn btn-outline-info btn-sm">Create Blog</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Account)