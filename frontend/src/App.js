import './App.css'
import React from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todolist': [],
      'token': '',
      'searched': [],
      'textSearch': ''
    }
    this.logOut = this.logOut.bind(this)
    this.isAuth = this.isAuth.bind(this)
    this.getToken = this.getToken.bind(this)
    this.createProject = this.createProject.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
    this.createToDo = this.createToDo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.searchProjects = this.searchProjects.bind(this)
    this.clearStateTextSearch = this.clearStateTextSearch.bind(this)
    this.isSearched = this.isSearched.bind(this)
    this.getTextSearch = this.getTextSearch.bind(this)
  }

  getToken(username, password) {
    axios.post('http://localhost:8000/api-auth-token/', {username: username, password: password}).then(response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        this.setState({'token': token}, this.loadData)
    }).catch(error => alert('Invalid username and password'))
  }

  getTokenFromStorage() {
    const token = localStorage.getItem('token')
    this.setState({'token': token}, this.loadData)
  }

  isAuth() {
    return this.state.token !== ''
  }

  logOut() {
    localStorage.setItem('token', '')
    this.setState({'token': ''})
    this.setState({'users': []})
    this.setState({'projects': []})
    this.setState({'todolist': []}, this.loadData)
  }

  getHeaders() {
    let headers = {
        'Content-Type': 'application/json'
    }

    if (this.isAuth()) {
        headers['Authorization'] = `Token ${this.state.token}`
    }
    return headers
  }

  loadData() {
    const headers = this.getHeaders()
    axios.get('http://localhost:8000/api/users', {headers})
        .then(response => {
          const users = response.data.results
          this.setState(
              {
                'users': users
              }
          )
        }).catch(error => console.log(error))

    axios.get('http://localhost:8000/api/projects', {headers})
        .then(response => {
          const projects = response.data.results
          this.setState(
              {
                'projects': projects
              }
          )
        }).catch(error => console.log(error))

    axios.get('http://localhost:8000/api/todo', {headers})
        .then(response => {
          const todolist = response.data.results
          const todoActive = todolist.filter((todo) => todo.active === true)
          this.setState(
              {
                'todolist': todoActive
              }
          )
        }).catch(error => console.log(error))
  }

  createProject(name, link_repository, users) {
    const headers = this.getHeaders()
    const data = {'name': name, 'link_repository': link_repository, 'users': users}
    axios.post('http://localhost:8000/api/projects/', data, {headers})
        .then(response => {
            let newProject = response.data
            const project = this.state.projects.filter((item) => item.id === newProject.project)[0]
            newProject.project = project
            this.setState({projects: [...this.state.projects, newProject]})
        }).catch(error => console.log(error))
  }

  deleteProject(id) {
    const headers = this.getHeaders()
    axios.delete(`http://localhost:8000/api/projects/${id}`, {headers})
        .then(response => {
            this.setState({
                projects: this.state.projects.filter((item) => item.id !== id)
            })
        }).catch(error => console.log(error))
  }

  createToDo(project, text, user, active) {
    const headers = this.getHeaders()
    const data = {'project': project, 'text': text, 'user': user, 'active': active}
    axios.post('http://localhost:8000/api/todo/', data, {headers})
        .then(response => {
            let newToDo = response.data
            const todo = this.state.todolist.filter((item) => item.id === newToDo.todo)[0]
            newToDo.todo = todo
            this.setState({todolist: [...this.state.todolist, newToDo]})
        }).catch(error => console.log(error))
  }

  deleteToDo(id) {
    const headers = this.getHeaders()
    axios.delete(`http://localhost:8000/api/todo/${id}`, {headers})
        .then(response => {
            this.setState({
                todolist: this.state.todolist.filter((item) => item.id !== id)
            })
            console.log(response)
        }).catch(error => console.log(error))
  }

  searchProjects(searchText) {
      const redirectSearchProjects = () => {
        window.location.href = '/projects/search'
      }

      const searchedProjects = this.state.projects.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()))
      this.setState({'searched': searchedProjects})
      redirectSearchProjects()
  }

  clearStateTextSearch() {
      this.setState({'textSearch': ''})
  }

  isSearched() {
    return this.state.searched.length !== 0
  }

  getTextSearch(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    const text = formJson['search']
    this.setState({'textSearch': text})
  }

  componentDidMount() {
    this.getTokenFromStorage()
    this.clearStateTextSearch()
  }

  render() {
    return (
        <div>
            <Menu todolist={this.state.todolist} users={this.state.users} projects={this.state.projects}
                getToken={this.getToken} logOut={this.logOut} isAuth={this.isAuth} createProject={this.createProject}
                deleteProject={this.deleteProject} createToDo={this.createToDo} deleteToDo={this.deleteToDo}
                searched={this.state.searched} searchProjects={this.searchProjects}
                clearStateTextSearch={this.clearStateTextSearch} isSearched={this.isSearched}
                textSearch={this.state.textSearch} getTextSearch={this.getTextSearch}/>
            <Footer />
        </div>
    )
  }
}

export default App;
