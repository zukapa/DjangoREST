import React from 'react'


class AuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: ''}
    }

    setStateInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm(event) {
        this.props.getToken(this.state.username, this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.submitForm(event)}>
                <input type='text' name='username' placeholder='username' value={this.state.username}
                    onChange={(event) => this.setStateInput(event)} />
                <input type='password' name='password' placeholder='password' value={this.state.password}
                    onChange={(event) => this.setStateInput(event)} />
                <input type='submit' value='Login' />
            </form>
        );
    }
}

export default AuthForm
