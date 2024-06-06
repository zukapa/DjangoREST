import React from 'react'

class SearchProjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: props.projects,
            searched: [],
            text: props.textSearch
        }
    }

    componentDidMount() {
        this.searchProjects()
        this.props.clearStateTextSearch()
    }

    componentDidUpdate()  {
        if (this.props.textSearch !== this.state.text && this.props.textSearch.length !== 0) {
            this.searchProjects()
            this.props.clearStateTextSearch()
            this.setState({'text': ''})
        }
    }

    searchProjects() {
        const searchedProjects = this.state.projects.filter((item) =>
            item.name.toLowerCase().includes(this.props.textSearch.toLowerCase()))
        this.setState({'searched': searchedProjects})
    }

    render() {
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
                {this.state.searched.map((project) => {
                    return (
                        <tbody key={project.id}>
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
                })}
            </table>
        )
    }
}

export default SearchProjects
