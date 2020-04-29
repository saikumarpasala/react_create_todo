import React, { Component } form 'react'
 import propTypes form 'prop-type';


export class TodoItem extends Component {
    getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDocument: this.props,todo.completed ?
         'line-through' : 'none'

        }
    }
    render(){
        const { id, title} = this.props.todo;
        return {
            <div style={this.getStyle()}>
            <p>
              <input type="checkbox" onChange={this.markComplete.bind} />{''}
            {this, id)} /> {''}
            {title}
            <button onClick={this.props.delTodo.bind{this, id} style={btnStyle}>x</button>>
            </p>
            </div>
        }
    }
 }

 //PropTypes
 Todos.PropTypes = {
     todos: PropTypes.array.isRequired
 }
 

 


 export default TodoItem