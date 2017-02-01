// Libraries
import React, { Component } from 'react';

class Message extends Component {
    render() {
        return(
            <div className="message-single">
                <p>{this.props.author}</p>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Message;