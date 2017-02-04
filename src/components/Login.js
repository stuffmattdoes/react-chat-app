// Libraries
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// Actions
import * as ChannelActions from '../actions/ChannelActions';

const Styles = {
    submitButton: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '13px',
        backgroundColor: '#40BA82',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        width: '80px',
        height: '30px',
        marginLeft: '15px'
    }
}

class Login extends Component {

    constructor() {
        super();
        this.onKeyDown= this.onKeyDown.bind(this);
        this.onTextChange= this.onTextChange.bind(this);
        this.submitUsername = this.submitUsername.bind(this);
        this.state = {
            username: ''
        }
    }

    onKeyDown(e) {
        if (e.key === 'Enter' || e.keyCode === '13') {
            this.submitUsername(e);
        }
    }

    onTextChange(e) {
        const inputValue = e.target.value;

        this.setState({
            username: inputValue
        });
    }

    submitUsername(e) {
        if (e) {
            e.preventDefault();
        }

        if (this.state.username === '') {
            return;
        }

        ChannelActions.default.addUsername(this.state.username);

        // Redirect to /app
        browserHistory.push('/app');
    }

    render() {
        return(
            <div
                className="login"
                style={ Styles }
            >
                <h1>React Simple Chat</h1>
                <a href="https://github.com/stuffmattdoes" target="_blank" >Matthew J. Morrison</a>
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        style={ Styles.input }
                        placeholder="Type a nickname"
                        onKeyDown={ this.onKeyDown }
                        onChange={ this.onTextChange }
                    />
                    <input
                        type="submit"
                        style={ Styles.submitButton }
                    />
                </form>

            </div>
        );
    }
}

export default Login;