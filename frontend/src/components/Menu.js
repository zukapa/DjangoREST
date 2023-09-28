import React from 'react'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Projects from './Projects.js'
import ToDoList from './Todolist.js'
import AuthForm from './Auth.js'
import Users from './Users.js'

const Menu = ({todolist, projects, users, getToken, logOut, isAuth}) => {
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
                        {isAuth() ? <button onClick={() => logOut()}>Logout</button> : <Link to='/login'>Login</Link>}
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element = {<ToDoList todolist={todolist} />} />
                <Route exact path='/projects' element = {<Projects projects={projects} />} />
                <Route exact path='/users' element = {<Users users={users} />} />
                <Route exact path='/login' element = {<AuthForm getToken={(username, password) => {getToken(username,
                    password)}} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Menu
