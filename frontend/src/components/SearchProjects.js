import React from 'react'

class SearchProjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchProjects: props.searchProjects,
        }
    }

    componentDidMount() {
        this.props.clearStateSearched()
    }

    newState(){
        this.setState({
            searchProjects: this.props.searchProjects
        })
    }

    static getDerivedStateFromProps(props, state){
        this.setState({
            searchProjects: props.searchProjects
        })
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
                {this.state.searchProjects.map((project) => {
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
                })}

                {console.log('должно быть ДО')}
            </table>
        )
    }
}

export default SearchProjects
