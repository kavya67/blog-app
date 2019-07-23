import React from 'react'
import axios from '../config/config'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
                email:this.state.email,
                password:this.state.password
        }
        axios.post(`/users/login`,formData)
            .then(response=>{
                // console.log(response.data.token)
                if(response.data.token){
                        const token = response.data.token
                        localStorage.setItem('userAuthToken',token)
                        this.props.history.push('/users/account')
                }else{
                    
                        alert('Invalid email / password')
                }
            })

    }
    render(){
        return(
            <div>
                <h1 class = "display-4 text-center">Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <label>Email</label>
                            <input 
                                type="text" 
                                className = "form-control" 
                                value={this.state.email} 
                                name='email' 
                                onChange={this.handleChange}/>
                    </div>
                    <div className = "form-group">
                    <label>Password </label>
                        <input 
                            type="password"  
                            className = "form-control"
                            value= {this.state.password} 
                            name = 'password' 
                            onChange={this.handleChange}/>
                    </div>
                    <label>
                        <input type = "submit" />
                    </label>
                </form>
            </div>
        )
    }
}
export default Login