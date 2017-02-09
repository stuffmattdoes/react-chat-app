// Libraries
import React, { Component } from 'react';

// Components
import Message from './Message';

// Actions
import * as ChannelActions from '../actions/ChannelActions';

// Stores
import MessageStore from '../stores/MessageStore';
import ChannelStore from '../stores/ChannelStore';

const Styles = {
    overflowY: 'scroll',
    padding: '15px',
    height: '350px'
}

class MessagesView extends Component {

    constructor(props) {
        super(props);
        this.getStateFromStores = this.getStateFromStores.bind(this);
        this.onStoreChange  = this.onStoreChange.bind(this);
        this.state = {
            pubnub: ChannelStore.pubnubGet(),
            messages: MessageStore.getAllMessages(),
            channel: ChannelStore.getChannel()
        }
    }

    getStateFromStores() {
        return {
            messages: MessageStore.getAllMessages()
        }
    }

    onStoreChange () {
        console.log('onStoreChange');
        this.setState(this.getStateFromStores());
    }

    componentDidMount() {
        // Subscribe to our store so we know when something changes, triggering a render update
        ChannelActions.default.channelSubscribe(this.state.pubnub, this.state.channel);
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
                        timestamp={ message.timestamp}
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