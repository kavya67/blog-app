import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

import Register from './components/User/Register';
import Login from './components/User/Login';
import Account from './components/User/Account';
import Logout from './components/User/Logout';
import BlogNew from './components/Blog/BlogNew';
import BlogShow from './components/Blog/BlogShow';
import BlogLand from './components/Blog/BlogLanding';
import BlogEdit from './components/Blog/BlogEdit';

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
                           <li><Link to = "/blog/all">Explore</Link></li>
                       </div>
                   )}
                   </ul>
                   
                   <Switch>
                       <Route path = "/users/register" component={Register} exact/>
                       <Route path = "/users/login" component = {Login} exact/>
                       <Route path = "/users/account" component = {Account} exact/>
                       <Route path = "/users/logout" component = {Logout} exact/>
                       <Route path = "/blog/add" component = {BlogNew} exact/>
                       <Route path = "/blog/show/:id" component = {BlogShow} exact/>
                       <Route path = "/blog/edit/:id" component = {BlogEdit} exact/>
                       <Route path = "/blog/all" component = {BlogLand} exact/>
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