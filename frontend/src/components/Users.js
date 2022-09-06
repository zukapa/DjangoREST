import React from 'react'

const User = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const Users = ({users}) => {
    return (
        <table>
            <th>
                Username
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <User user={user} />)}
        </table>
    )
}

export default Users
