import React from 'react'
import {Link} from 'react-router-dom'

const Project = ({project}) => {
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

const Projects = ({projects}) => {
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
            {projects.map((project) => <Project project={project} key={project.id}/>)}

            <Link to='/projects/create'>Create</Link>
        </table>
    )
}

export default Projects
