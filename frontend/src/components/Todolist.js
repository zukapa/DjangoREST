import React from 'react'

const ToDo = ({todo}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.url}
                </td>
            </tr>
        </tbody>
    )
}

const ToDoList = ({todolist}) => {
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
            {todolist.map((todo) => <ToDo todo={todo} key={todo.id} />)}
        </table>
    )
}

export default ToDoList
