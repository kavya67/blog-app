import React from 'react'
import axios from '../../config/config'

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
            <div className="container pt-sm-5 col-sm-6">
                <div  className="card">
                    <div  className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                        <form onSubmit={this.handleSubmit}>
                            <div className = "form-group">
                                <label>Email</label>
                                    <input 
                                        type="text" 
                                        className = "form-control" 
                                        value={this.state.email} 
                                        name='email' 
                                        onChange={this.handleChange}
                                        placeholder= "Email"/>
                            </div>
                            <div className = "form-group">
                            <label>Password </label>
                                <input 
                                    type="password"  
                                    className = "form-control"
                                    value= {this.state.password} 
                                    name = 'password' 
                                    onChange={this.handleChange}
                                    placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login