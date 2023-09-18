import React from 'react'

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
        </table>
    )
}

export default Projects
