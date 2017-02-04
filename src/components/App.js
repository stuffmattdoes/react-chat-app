// Libraries
import React, { Component } from 'react';

// Styles
import '../App.css';

// Components
import ChatBox from './ChatBox';
import Header from './Header';
import MessagesView from './MessagesView';
import WhosTyping from './WhosTyping';

// Stores
import * as MessageStore from '../stores/MessageStore';

// API
import WebAPIUtils from '../utils/WebAPIUtils';

// Load Mock API Call
// CartAPI.getProductData();
const Styles = {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: 'white',
    margin: '0 auto',
    borderRadius: '2px',
    overflow: 'hidden',
    // webkitBoxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0,15)',
    // mozBoxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0,15)',
    // boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0,15)'
};

class App extends Component {

    componentWillMount() {
        /*WebAPIUtils.messagesGetAll().done(() => {
            this.setState({
                receivedMessages: true,
                message: MessageStore.getAllMessages()
            });
        });*/
    }

    render() {
        return (
            <div style={Styles} className="app">
                <Header />
                <MessagesView />
                <WhosTyping />
                <ChatBox />
            </div>
	    );
    }
}

export default App;
