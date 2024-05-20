import React from 'react'
import {Link} from 'react-router-dom'

const Project = ({project, deleteProject}) => {
    return (
        <tbody>
            <tr>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.url}
                </td>
                <td>
                    <button onClick={() => deleteProject(project.id)} type='button'>Delete</button>
                </td>
            </tr>
        </tbody>
    )
}

const Projects = ({projects, deleteProject}) => {
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
                    <th>
                    </th>
                </tr>
            </thead>
            {projects.map((project) => <Project project={project} key={project.id} deleteProject={deleteProject} />)}
            <tbody>
                <tr>
                    <td>
                        <Link to='/projects/create'>Create</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Projects
