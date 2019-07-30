import React,{Fragment} from 'react';
import './App.css';
import TodoDashBoard from './todo-dashboard/TodoDashBoard';

export default function App() {
  return (
    <Fragment>
        <div className="App">
          <TodoDashBoard/>
        </div>
    </Fragment>
  )
}
