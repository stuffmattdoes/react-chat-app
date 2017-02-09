// Libraries
import React, { Component } from 'react';
const pubnub = require ('pubnub');

// Configuration
// import Config from '../utils/Config';

// Styles
import '../App.css';

// Components
import ChatBox from './ChatBox';
import Header from './Header';
import Login from './Login';

// import Loading from './Loading';
import MessagesView from './MessagesView';
import WhosTyping from './WhosTyping';

// Actions
import * as ChannelActions from '../actions/ChannelActions';

// Stores
// import * as MessageStore from '../stores/MessageStore';
import ChannelStore from '../stores/ChannelStore';

// API
// import WebAPIUtils from '../utils/WebAPIUtils';

// Load Mock API Call
// CartAPI.getProductData();
const Styles = {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: 'white',
    margin: '0 auto 20px',
    borderRadius: '2px',
    overflow: 'hidden',
    // webkitBoxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0,15)',
    // mozBoxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0,15)',
    // boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0,15)'
};

class App extends Component {

    constructor() {
        super();
        this.getStateFromStores = this.getStateFromStores.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        this.pubnubInit = this.pubnubInit.bind(this);
        this.state = {
            UUID: ChannelStore.getUser()
        }
    }

    getStateFromStores() {
        return {
            UUID: ChannelStore.getUser()
        }
    }

    onStoreChange () {
        this.setState(this.getStateFromStores());
    }

    componentWillMount() {
        this.pubnubInit();
        ChannelStore.addListener('CHANNEL_UPDATE', this.onStoreChange );
    }

    componentWillUnmount() {
        ChannelStore.removeListener('CHANNEL_UPDATE', this.onStoreChange );
    }

    pubnubInit() {
        // console.log(Config.pubnubSubscribeKey, Config.pubnubPublishKey);

        let _pubnub = new pubnub ({
            publish_key: 'pub-c-08de46b8-b813-4f08-afef-cbdf4dfbe99e',
            subscribe_key: 'sub-c-92e2d9e2-ea82-11e6-889b-02ee2ddab7fe',
            uuid: 'Matthew Morrison',
            error: error => {
                console.log('Error:', error);
            }
        });

        ChannelActions.default.pubnubInit(_pubnub);
    }

    render() {

        return (
            <div>
                <div style={Styles} className="app">
                    <Header />
                    <MessagesView />
                    <WhosTyping />
                    { this.state.UUID ? <ChatBox /> : <Login /> }
                </div>
                <p className="matt-link"> Made by <a href="https://github.com/stuffmattdoes" target="_blank" >Matthew J. Morrison</a></p>
            </div>
	    );
    }
}

export default App;
