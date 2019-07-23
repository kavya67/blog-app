import React from "react"
import axios from '../config/config'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/register', formData)
            .then(response=>{
                if(response.data.errors){
                    alert(response.data.message)
                }else{
                    this.props.history.push('/users/login')
                }
            })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input  
                            type = "text"
                            onChange={this.handleChange}
                            name = "username"
                            value ={this.state.username}
                            placeholder="username"
                            />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="text"
                            onChange={this.handleChange}
                            name="email"
                            value={this.state.email}
                            placeholder="Email"
                            />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.password}
                            placeholder="Password"
                            />    
                    </div>
                    <label>
                        <input
                            type = "submit"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Register
