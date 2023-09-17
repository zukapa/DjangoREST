import './App.css'
import React from 'react'
import Users from './components/Users'
import Projects from './components/Projects'
import ToDoList from './components/Todolist'
import Menu from './components/Menu'
import Footer from './components/Footer'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todolist': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
          const users = response.data.results
          this.setState(
              {
                'users': users
              }
          )
        }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
          const projects = response.data.results
          this.setState(
              {
                'projects': projects
              }
          )
        }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/todo')
        .then(response => {
          const todolist = response.data.results
          this.setState(
              {
                'todolist': todolist
              }
          )
        }).catch(error => console.log(error))
  }

  render () {
    return (
        <div>
            <Menu />
            <Users users={this.state.users} />
            <Projects projects={this.state.projects} />
            <ToDoList todolist={this.state.todolist} />
            <Footer />
        </div>
    )
  }
}

export default App;
