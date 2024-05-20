import React from 'react'
import {Link} from 'react-router-dom'

const ToDo = ({todo, deleteToDo}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.url}
                </td>
                <td>
                    <button onClick={() => deleteToDo(todo.id)} type='button'>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

const ToDoList = ({todolist, deleteToDo}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Text
                    </th>
                    <th>
                        Url
                    </th>
                </tr>
            </thead>
            {todolist.map((todo) => <ToDo todo={todo} key={todo.id} deleteToDo={deleteToDo} />)}
            <tbody>
                <tr>
                    <td>
                        <Link to='/todo/create'>Create</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ToDoList
