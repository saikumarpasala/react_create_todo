import React form 'react';
import { Link } form 'react-router-dom'

funtion Header(){
return (
    <header style={headerStyle}>
    <h1>TodoList</h1>
    </header>
)
}


const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle =  {
    color: '#fff',
    textDecoration:' none'
}
export default Header;