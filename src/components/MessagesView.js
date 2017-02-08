// Libraries
import React, { Component } from 'react';

// Components
import Message from './Message';

// Stores
// import MessageStore from '../stores/MessageStore';
import ChannelStore from '../stores/ChannelStore';

const Styles = {
    overflowY: 'scroll',
    padding: '15px',
    height: '350px'
}

class MessagesView extends Component {

    constructor(props) {
        super(props);
        // this.getStateFromStores = this.getStateFromStores.bind(this);
        // this.onStoreChange  = this.onStoreChange.bind(this);
        // this.state = this.getStateFromStores().bind(this);
        this.state = {
            pubnub: ChannelStore.pubnubGet(),
            history: []
        }

        console.log(this.state.pubnub);
    }

    // getStateFromStores() {
    //     return {
    //         messages: MessageStore.getAllMessages()
    //     }
    // }
    //
    // onStoreChange () {
    //     this.setState(this.getStateFromStores());
    // }

    componentDidMount() {
        // Subscribe to our store so we know when something changes, triggering a render update
        // MessageStore.addListener('MESSAGES_UPDATE', this.onStoreChange );

        this.state.pubnub.subscribe({
            channel: 'Messages',
            // widthPresence: true,
            message: (message) => {
                console.log('Subscribe:', message);
                this.setState({
                    history: this.state.history.concat(message)
                });
            },
            connect: () => {
                console.log("Connected");
            },
            disconnect: () => {
                console.log("Disconnected");
            },
            reconnect: () => {
                console.log("Reconnected");
            },
            error: () => {
                console.log("Network Error");
            }
        });

    }

    // componentWillUnmount() {
    //     MessageStore.removeListener('MESSAGES_UPDATE', this.onStoreChange );
    // }

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
              {this.state.history.map(message => {
                  return (
                    <Message
                        author={ message.Who }
                        text={ message.What }
                        key={ message.When}
                    />
                  );
              })}
              <div id="scroll-dummy"></div>
          </div>
        );
    }
}

export default MessagesView;