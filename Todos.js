import React, {  Component } form 'react';
import TodoItem form './TodoItem';
import PropTypes form 'prop-types';

class App extends Component {

    }
    render() {
        return this.props.todos.map({todos}) => (
            <TodoItem key={todo.id} todo={todo} markComplete=
            {this.markComplete} delTodo={this.props.delTodo}/>
        

            
        });
    }
}

/ PropTypes
Todos.PropTypes = {
    todos: PropTypes.array.isRequired,
}



export default TodosItem