// Libraries
import React, { Component } from 'react';

// Styles
import '../App.css';

// Components
import Header from './Header';
import ChatBox from './ChatBox';
import MessagesView from './MessagesView';

class App extends Component {

    render() {
        return (
            <div style={Styles} className="app">
                <Header />
                <MessagesView />
                <ChatBox />
            </div>
	    );
    }
}

const Styles = {
    textAlign: 'center',
    width: '100%',
    maxWidth: '450px',
    height: '100%',
    maxHeight: '450px',
    backgroundColor: 'white',
    margin: '0 auto',
    borderRadius: '2px',
    overflow: 'hidden'
};

export default App;
