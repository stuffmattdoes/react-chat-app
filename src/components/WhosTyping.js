// Libraries
import React, { Component } from 'react';

// Stores
import ChannelStore from '../stores/ChannelStore';

const Styles = {
    padding: '6px 20px',
    color: '#656565',
    fontSize: '10px',
    fontStyle: 'italic'
}

class WhosTyping extends Component {
    constructor() {
        super();
        this.getStateFromStores = this.getStateFromStores.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        this.state = this.getStateFromStores();
    }

    getStateFromStores() {
        return {
            usersTyping: ChannelStore.getUsersTyping()
        }
    }

    onStoreChange () {
        this.setState(this.getStateFromStores());
    }

    componentWillMount() {
        // Subscribe to our store so we know when something changes, triggering a render update
        ChannelStore.addListener('CHANNEL_UPDATE', this.onStoreChange );
    }

    componentWillUnmount() {
        ChannelStore.removeListener('CHANNEL_UPDATE', this.onStoreChange );
    }

    componentDidUpdate() {
        console.log('Component updated.');
    }

    render() {
        let usersTyping = this.state.usersTyping.map(user => {
            return user;
        });

        let usersTypingPhrase;

        if (usersTyping.length > 3) {
            usersTypingPhrase ='Several people are typing.';
        } else if (usersTyping.length == 1) {
            usersTypingPhrase = usersTyping + ' is typing.';
        } else if (usersTyping.length) {
            usersTypingPhrase = usersTyping.join(', ') + ' are typing.';
        }

        return (
            <div style={ Styles } className="users-typing">
                { usersTypingPhrase }
            </div>
        );
    }
}

export default WhosTyping;