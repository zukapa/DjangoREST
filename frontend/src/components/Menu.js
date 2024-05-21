import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Projects from './Projects.js'
import ToDoList from './Todolist.js'
import AuthForm from './Auth.js'
import Users from './Users.js'
import ProjectsForm from './CreateProject.js'
import ToDoForm from './CreateToDo.js'
import SearchProjects from './SearchProjects.js'

const Menu = ({todolist, projects, users, getToken, logOut, isAuth, createProject, deleteProject, createToDo, deleteToDo, searched, searchProjects}) => {
    const getText = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        const textSearch = formJson['search']

        searchProjects(textSearch)
    }

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Todolist</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                    <li>
                        <form onSubmit={getText}>
                            <input type="text" name="search" placeholder="Search projects"/>
                            <button type="submit">Search</button>
                        </form>
                    </li>
                    <li>
                        {isAuth() ? <button onClick={() => logOut()}>Logout</button> : <Link to='/login'>Login</Link>}
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element = {<ToDoList todolist={todolist} deleteToDo={(id) => {deleteToDo(id)}} />} />
                <Route exact path='/projects' element = {<Projects projects={projects} deleteProject={(id) => {deleteProject(id)}}/>} />
                <Route exact path='/users' element = {<Users users={users} />} />
                <Route exact path='/login' element = {<AuthForm getToken={(username, password) => {getToken(username,
                    password)}} />} />
                <Route exact path='/projects/create' element = {<ProjectsForm users={users} createProject={(name, link_repository, users) => {createProject(name, link_repository, users)}} />} />
                <Route exact path='/todo/create' element = {<ToDoForm users={users} projects={projects} createToDo={(project, text, user, active) => {createToDo(project, text, user, active)}} />} />
                <Route exact path='/projects/search' element = {<SearchProjects searchProjects={searched} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Menu
