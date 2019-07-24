import React from 'react'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:props.blog ? props.blog.title : '',
            description:props.blog ? props.blog.description : ''
          
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
            title: this.state.title,
            description: this.state.description
        }

        this.props.handleSubmit(formData)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label>Title</label>
                        <input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange = {this.handleChange}
                        placeholder= "title"/>
                    </div>
                    <div>
                        <label>Description</label> <br/>
                        <textarea 
                        name= "description"
                        value={this.state.description}
                        onChange = {this.handleChange}
                        placeholder = "description"
                        rows = "3"
                        cols = "50">
                        </textarea>
                    </div>
                    <label>
                        <input
                            type= "submit"
                            />
                    </label>
                </form>
            </div>
        )
    }
}

export default Form