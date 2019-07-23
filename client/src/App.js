import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

import Register from './components/Register'
import Login from './components/Login'
import Account from './components/Account'
import Logout from './components/Logout'

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                   <ul>
                   {_.isEmpty(this.props.user)? (
                       <div>
                           <li><Link to = "/users/register">Register</Link></li>
                           <li><Link to = "/users/login">Login</Link></li>
                       </div>
                   ): (
                       <div>
                           <li><Link to = "/users/account">Account</Link></li>
                           <li><Link to = "/users/logout">Logout</Link></li>
                       </div>
                   )}
                   </ul>
                   
                   <Switch>
                       <Route path = "/users/register" component={Register}/>
                       <Route path = "/users/login" component = {Login}/>
                       <Route path = "/users/account" component = {Account}/>
                       <Route path = "/users/logout" component = {Logout}/>
                   </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(App)