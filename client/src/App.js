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
import Welcome from './components/User/Welcome'

class App extends React.Component{
    render(){
        return(
            <div className ="container pt-sm-5"> 
                <BrowserRouter>
                  <div className="navbar navbar-lightp-3 mb-2 bg-info text-white ">
                  <span className="nav-brand"><h2>{this.props.msg}</h2></span>
                    <ul className="nav justify-content-end">
                        {_.isEmpty(this.props.user)? (
                            <div>
                                <Link to = "/users/register"  className="btn btn-outline-light btn-sm">Register</Link>
                                <span> </span>
                                <Link to = "/users/login" className="btn btn-outline-light btn-sm">Login</Link>
                            </div>
                        ): (
                            <div>
                                <Link to = "/users/account" className="btn btn-outline-light btn-sm">Account</Link>
                                <span> </span>
                                <Link to = "/blog/all"className="btn btn-outline-light btn-sm">Explore</Link>
                                <span> </span>
                                <Link to = "/users/logout" className="btn btn-outline-light btn-sm">Logout</Link>
                            </div>
                        )}
                    </ul>
                  </div>
                   
                   <Switch>
                       <Route path = "/" component={Welcome} exact/>
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
        user: state.user,
        msg: "Blogger"
    }
}

export default connect(mapStateToProps)(App)