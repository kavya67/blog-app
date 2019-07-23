import React from 'react'
import axios from '../config/config'

import {connect} from 'react-redux'
import {resetUser} from '../action/userAction'

class Logout extends React.Component{

    componentDidMount(){
        axios.delete('/users/logout', {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(()=>{
                localStorage.removeItem('userAuthToken')
                this.props.dispatch(resetUser())
                this.props.history.push('/users/login')
            })
    }

    render(){
        return(
            <div>
                <p>{this.props.user.username} is logging out...</p>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)

