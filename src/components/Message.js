// Libraries
import React, { Component } from 'react';

const Styles = {
    textAlign: 'left',
    margin: '10px 0 20px',
    author: {
        fontSize: '10px',
        fontWeight: 'bold',
        margin: 0
    },
    text: {
        fontSize: '13px',
        lineHeight: '21px',
        margin: '8px 0'
    }
}

class Message extends Component {
    render() {
        return(
            <div style={ Styles } className="message-single">
                <p style={ Styles.author } >{this.props.author}</p>
                <p style={ Styles.text } >{this.props.text}</p>
            </div>
        );
    }
}

export default Message;