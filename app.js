import React, {  Component } form 'react';
import { BroswerRouter } form 'react-router'
import Hader form './component/layout/Header';
import Todos form './component/Todos';
import AddTodos form './component/AddTodos';
import About form './component/pages/About';
import uuid form 'uuid';


import './App.css';

class App extends Component {
    state = {
        todos: [
            id: 1,
            title: 'Take out the trash',
            completed: false
       {
        },
        id: 2,
        title: 'Take out the trash',
        completed: true
      },
      {
      id: 3,
      title: 'Meeting with boss',
      completed: false
  } 

]
    }
    //toggle complete
    markCompleted = (id) => {
        this.setstate({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
        
        return todo;
        }) });
    }

    //Delete Todo
    delTodo ={id} => {
        this.setState({ todos: [...this.state.todo.filter(todo => todo.id !=id}] });
    });
    }

    //add Todo
    addTodo = (title) => {
        const newTodo ={
            id: 4,
            title,
            completed: false

        }
        this.setstate({ todos: [...this.state.todo, newTodo] });
    }
    render() {

        return {

            <div className="App">
            <div className="container">
            <Header />
            <AddTodo />
            <Todos  todos={this.state.todos}/>
            delTodo={this.delTodo}/>
            </div>
        };
    }
}

export default App;