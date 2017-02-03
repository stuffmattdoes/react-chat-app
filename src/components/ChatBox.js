// Libraries
import React, { Component } from 'react';

// Actions
import * as MessageActions from '../actions/MessageActions';
import * as ChannelActions from '../actions/ChannelActions';

const Styles = {
    form: {
        display: 'flex',
        padding: '15px',
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
    },
    textarea: {
        width: '100%',
        border: 'none',
        outline: 'none',
        fontSize: '13px'
    },
    borderTop: '1px solid #D8D8D8',
}

class ChatBox extends Component {

    /*
        The constructor method is called before it is mounted
        If you don't initialize state and you don't bind methods
        you don't need to implement a constructor for your React component.
    */
    constructor(props) {
        super(props);   // Define props in the constructor
        this.onKeyDown = this.onKeyDown.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        // Constructors are also a good place to initialize state
        this.state = {
            message: ''
        }
    }

    onKeyDown(e) {
        if (e.key === 'Enter' || e.keyCode === '13') {
            this.submitMessage(e);
        }
    }

    onTextChange(e) {
        const inputValue = e.target.value;

        if (inputValue !== '') {
            ChannelActions.default.userTypingAdd();
        } else {
            ChannelActions.default.userTypingRemove();
        }

        this.setState({
            message: inputValue
        });
    }

    submitMessage(e) {
        if (e) {
            e.preventDefault();
        }

        if (this.state.message === '') {
            return;
        }

        ChannelActions.default.userTypingRemove();

        // Dispatch message here
        MessageActions.default.messageCreate(
            this.state.message
        );

        this.setState({
            message: ''
        });
    }

    render() {
        return(
            <div style={ Styles } className="app-chatbox">
                <form
                    style={ Styles.form }
                    onSubmit={ this.submitMessage }
                >
                    <textarea
                        style={ Styles.textarea }
                        placeholder="Type your message here."
                        onKeyDown={ this.onKeyDown }
                        onChange={ this.onTextChange }
                        value={ this.state.message }>
                    </textarea>
                    <input
                        style={ Styles.submitButton }
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        );
    }
}

export default ChatBox;