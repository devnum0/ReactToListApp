
import React, { Component } from 'react'
import './todo.styles.css'

export default class Todo extends Component {
            constructor(props){
                super(props);
                this.state = {
                    statusClicked: false,
                    status:''
                }
            }
            
            removeTodo = ({id,name}) => {        
                fetch(`http://localhost:4000/remove/${id}`, {
                    method: 'put',
                    headers: {'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                  })
                .then(response => response.json())
                .then(message => {
                    alert(message);
                })
                .catch(err => console.log(err))
                this.props.deleteTodo({name})
            }

            onStatusChange = ({id,status}) =>{
                this.setState({statusClicked: !this.state.statusClicked}, () => console.log(this.state.statusClicked))
                fetch("http://localhost:4000/updateStatus", {
                    method: 'put',
                    headers: {'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                    body: JSON.stringify({
                        id,
                        status
                    })
                  })
                .then(response => response.json())
                .then(message => {
                    alert(message);
                })
                .catch(err => console.log(err))
             
            }

    render() {
        const {name,description,id } = this.props;
         const status = this.state.statusClicked === false ? 'IN PROGRESS' : "COMPLETED";
        return (
            <div className="todo">
            <h1>{name}</h1>
            <div className="text-area">
                <textarea 
                        name="message" 
                        ows="10" 
                        cols="30" 
                        value={description} 
                        disabled={true}
                        style={{width:'200px', height:'50px'}}
                        />  
            </div>
            <div className="class">
                <button onClick={() =>this.removeTodo({id,name})}>Remove Todo</button>
                <button onClick={() =>this.onStatusChange({id,status})}>{status}</button>
            </div>
        </div>
        )
    }
}


