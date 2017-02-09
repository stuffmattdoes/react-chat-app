// Libraries
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// Actions
import * as ChannelActions from '../actions/ChannelActions';

// Stores
import ChannelStore from '../stores/ChannelStore';

const Styles = {
    padding: '15px',
    textAlign: 'center',
    borderTop: '1px solid #D8D8D8',
    input: {
        margin: '0 auto 10px',
        display: 'block',
        border: 'none',
        padding: '6px',
        outline: 'none',
        borderBottom: '1px solid #D8D8D8',
        textAlign: 'center'
    },
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
            pubnub: ChannelStore.pubnubGet(),
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
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        style={ Styles.input }
                        placeholder="Enter a nickname"
                        onKeyDown={ this.onKeyDown }
                        onChange={ this.onTextChange }
                    />
                    <input
                        type="submit"
                        style={ Styles.submitButton }
                        value="join"
                    />
                </form>

            </div>
        );
    }
}

export default Login;