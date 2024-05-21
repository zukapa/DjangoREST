import React from 'react'
import {Link} from 'react-router-dom'

const SearchProject = ({project}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.url}
                </td>
            </tr>
        </tbody>
    )
}

const SearchProjects = ({searchProjects}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Project name
                    </th>
                    <th>
                        Url
                    </th>
                </tr>
            </thead>
            {searchProjects.map((project) => <SearchProject project={project} key={project.id}/>)}
        </table>
    )
}

export default SearchProjects
