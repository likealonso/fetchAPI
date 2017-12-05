import React from 'react';

const Dropdown = ({updateUser, currentUser, listNames}) => {
    let users = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich"]
    var empty = listNames
    
    return (
        <select onChange={(e) => updateUser(e.target.value)} value={currentUser}>
            { users.map( user => <option value={user} key={user} >{user}</option> ) }
        </select>    
    )
}


export default Dropdown;