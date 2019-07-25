import React from "react"
import axios from '../../config/config'

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
            <div className="container pt-sm-5 col-sm-6">
                <div  className="card">
                    <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input  
                            type = "text"
                            onChange={this.handleChange}
                            name = "username"
                            value ={this.state.username}
                            placeholder="username"
                            className="form-control"
                            />
                    </div><br/>
                    <div>
                        <label>Email</label>
                        <input 
                            type="text"
                            onChange={this.handleChange}
                            name="email"
                            value={this.state.email}
                            placeholder="Email"
                            className="form-control"
                            />
                    </div><br/>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.password}
                            placeholder="Password"
                            className="form-control"
                            />    
                    </div><br/>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
