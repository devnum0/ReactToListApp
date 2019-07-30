import React, { Component } from 'react'
import './todo-form.styles.css'
export default class TodoForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            description: '',
            status:'OPEN',
            id: '',
        }
    }

     saveTodo ()  {
        const {name,description,status }= this.state;

     fetch('http://localhost:4000/add', {
            method: 'post',
            headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'},
            
            body: JSON.stringify({
                name:name,
                description:description,
                status:status
            })
          })
          .then(response => response.json())
          .then(todo => {
              if(todo){
                this.props.addTodo({
                    name: todo.name,
                    description: todo.description,
                    status: todo.status,
                    id: todo._id
                })            
              }      
              else{
               return;
              }
          }).catch(err => {
            // console.log(err)
            // adding this
            this.props.addTodo({
              name: name,
              description: description,
              status: status,
           
          })  
          })

    }

    onNameChange = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value});
      }

      onDescriptionChange = (event) => {
        event.preventDefault();
        this.setState({description: event.target.value});
      }
      
      onStatusChange = (event) => {
        event.preventDefault();
        this.setState({status: event.target.value});
      }
    handleSubmit = e => {
        e.preventDefault();
        this.saveTodo();
        this.setState({name:'',description:''})
      };


    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit} >
                    <label>Todo Name</label>
                    <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                  <br/> <label>Todo Description</label> <br/>
                    <textarea 
                    name="message" 
                    ows="10" 
                    cols="30" 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}
                    style={{width:'200px', height:'50px'}}
                    />
                   <br/>
                    <button onClick={this.handleSubmit}>create todo</button>
                </form>           
            </div>
        )
    }
}
