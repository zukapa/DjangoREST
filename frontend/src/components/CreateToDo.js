import React from 'react'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project: props.projects[0].url,
            text: '',
            user: props.users[0].url,
            active: false
        }
    }

    setStateChange(event) {
        if (event.target.name === 'active') {
            this.setState({
                active: event.target.checked
            })
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    submitForm(event) {
        this.props.createToDo(this.state.project, this.state.text, this.state.user, this.state.active)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submitForm(event)}>
                    <select name="project" onChange={(event) => this.setStateChange(event)}>
                        {this.props.projects.map((project) => <option value={project.url} key={project.id}> {project.name} </option>)}
                    </select>
                    <input type="text" name="text" placeholder="Text" onChange={(event) => this.setStateChange(event)}/>
                    <select name="user" onChange={(event) => this.setStateChange(event)}>
                        {this.props.users.map((user) => <option value={user.url} key={user.id}> {user.username} </option>)}
                    </select>
                    <input type="checkbox" name="active" onChange={(event) => this.setStateChange(event)}/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default ToDoForm
