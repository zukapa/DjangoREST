import React from 'react'

const Project = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.url}
            </td>
        </tr>
    )
}

const Projects = ({projects}) => {
    return (
        <table>
            <th>
                Project name
            </th>
            <th>
                Url
            </th>
            {projects.map((project) => <Project project={project} />)}
        </table>
    )
}

export default Projects
