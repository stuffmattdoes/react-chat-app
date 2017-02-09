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

    static propTypes = {
        author: React.PropTypes.string,
        text: React.PropTypes.string,
        timestamp: React.PropTypes.number
    }

    render() {
        console.log(this.props.author, this.props.text, this.props.timestamp);
        return(
            <div style={ Styles } className="message-single">
                <p style={ Styles.author } >{this.props.author}</p>
                <p style={ Styles.text } >{this.props.text}</p>
            </div>
        );
    }
}

export default Message;