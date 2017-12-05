import React, {Component} from 'react';
// import API from '../api/api'
import Dropdown from './Dropdown'
import Users from './Users'
const API = 'https://jsonplaceholder.typicode.com/users'


class App extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            currentUser: "Leanne Graham"
        }
    }
      
    componentDidMount() {
        this.getUsers()
    }

    getUsers = (event) => {
        this.setState({
            users: null,
            currentUser: ''
        })

        fetch(API, {
            method: "get"
        })
        .then(res => res.json())
        .then(data => {
            console.log(event)
            this.setState({
                currentUser: event,
                users: data
            })
        })
    
    }

    render() {
        return(
            <div>
                <Dropdown listNames={this.state.users} updateUser={this.getUsers} currentUser={this.currentUser} />
                {this.state.users ? <Users users={this.state.users} currentUser={this.state.currentUser}/> : <h1>loading</h1>}
                
            </div>
            )
        }
      
}

export default App