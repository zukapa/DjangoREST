import React from 'react'

const ToDo = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.url}
            </td>
        </tr>
    )
}

const ToDoList = ({todolist}) => {
    return (
        <table>
            <th>
                Text
            </th>
            <th>
                Url
            </th>
            {todolist.map((todo) => <ToDo todo={todo} />)}
        </table>
    )
}

export default ToDoList
