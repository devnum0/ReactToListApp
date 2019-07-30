import React, { Component } from 'react'
import TodoForm from '../todo-form/TodoForm';
import Todo from '../todo/Todo';
import './todo-list.styles.css'
export default class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = {
            todoList: [],
        }
    }

    addTodo = todo => {
        this.setState(state => ({
            todoList: [todo, ...state.todoList]
        }));
      };

    deleteTodo = ({name}) => {
       const v = this.state.todoList.filter(todo => todo.name !== name);
       this.setState({todoList: v});


    }

    render() {
        const{todoList}=this.state;
        return (
            <div className="todo-list">
            
                 <TodoForm addTodo={this.addTodo}/>
                
                     <div className="list-box">
                     {
                     todoList.map((todo, index) => {
                        const {name,description,id}=todo;
                        const usedId = id ? id: index;
                      
                     return   <Todo key={usedId}
                                 name={name} 
                                 description={description} 
                                 deleteTodo={this.deleteTodo} 
                                 id={usedId}
                                 />
                     })
                }                    
                     </div>             
            </div>
        )
    }
}
