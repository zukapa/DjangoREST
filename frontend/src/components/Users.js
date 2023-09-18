import React from 'react'

const User = ({user}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {user.username}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>
        </tbody>
    )
}

const Users = ({users}) => {
    return (
        <table key={users.id}>
            <thead>
                <tr>
                    <th>
                        Username
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            {users.map((user) => <User user={user} key={user.id} />)}
        </table>
    )
}

export default Users
