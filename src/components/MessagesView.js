// Libraries
import React, { Component } from 'react';

// Components
import Message from './Message';

// Stores
import MessageStore from '../stores/MessageStore';

const Styles = {
    overflowY: 'scroll',
    padding: '15px',
    height: '350px'
}

class MessagesView extends Component {

    constructor() {
        super();
        this.getStateFromStores = this.getStateFromStores.bind(this);
        this.onStoreChange  = this.onStoreChange.bind(this);
        this.state = this.getStateFromStores();
    }

    getStateFromStores() {
        return {
            messages: MessageStore.getAllMessages()
        }
    }

    onStoreChange () {
        this.setState(this.getStateFromStores());
    }

    componentWillMount() {
        // Subscribe to our store so we know when something changes, triggering a render update
        MessageStore.addListener('MESSAGES_UPDATE', this.onStoreChange );
    }

    componentWillUnmount() {
        MessageStore.removeListener('MESSAGES_UPDATE', this.onStoreChange );
    }

    componentDidUpdate() {
        let scrollDummy = document.getElementById('scroll-dummy');

        scrollDummy.scrollIntoView({
            block: 'end',
            behavior: 'instant'
        });
    }

    render() {
        return(
          <div style={ Styles } className="app-messages-view">
              {this.state.messages.map(message => {
                  return (
                    <Message
                        author={ message.author }
                        text={ message.text }
                        key={ message.timestamp }
                    />
                  );
              })}
              <div id="scroll-dummy"></div>
          </div>
        );
    }
}

export default MessagesView;