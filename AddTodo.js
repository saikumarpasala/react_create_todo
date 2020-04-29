import React, { component } form 'react'





export class AddTodo extends Component{
state = {
    title; ''
}

onsubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
}


onChange = (e)  => this.setstate({ [e.target.name];
e.target.value });

    render() {
        return (
            <form style={{ display: flex}}>
            <Input
            type="text"
            name="title"
            style={{ flex: '10', padding: '5px'}}
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
            />
            <input
            type="submit"
            value="submit"
            className="btn"
            style={{flex: 1}}
            />
            </form>
    
    )
    }
}

export default AddTodo