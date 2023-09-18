import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Projects from './Projects.js'
import ToDoList from './Todolist.js'
import Users from './Users.js'

const Menu = ({todolist, projects, users}) => {
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
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element = {<ToDoList todolist={todolist}/>}/>
                <Route exact path='/projects' element = {<Projects projects={projects}/>}/>
                <Route exact path='/users' element = {<Users users={users}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Menu
