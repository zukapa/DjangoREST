import React from 'react'

class ProjectsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            link_repository: '',
            users: props.users
        }
    }

    setStateChange(event) {
        if (event instanceof Array) {
            this.setState({
                users: event
            });
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    submitForm(event) {
        this.props.createProject(this.state.name, this.state.link_repository, this.state.users)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submitForm(event)}>
                    <input type="text" name="name" placeholder="Name" onChange={(event) => this.setStateChange(event)}/>
                    <input type="text" name="link_repository" placeholder="Link Repository" onChange={(event) => this.setStateChange(event)}/>
                    <select name="users" onChange={(event) => {
                        const options = [...event.target.selectedOptions]
                        const values = options.map((option) => option.value)
                        this.setStateChange(values)}} multiple={true}>
                        {this.props.users.map((user) => <option value={user.url} key={user.id}> {user.username} </option>)}
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ProjectsForm
