// Libraries
import React, { Component } from 'react';

// Stores
import ChannelStore from '../stores/ChannelStore';

const Styles = {
    backgroundColor: '#9769C1',
    padding: '10px 15px',
    buttonOutline: {
        color: 'white',
        display: 'inline-block',
        fontSize: '10px',
        border: '1px solid #AB87CD',
        padding: '6px 15px',
        marginRight: '8px',
        cursor: 'pointer',
        position: 'relative'
    }
}

class Header extends Component {

    constructor() {
        super();
        this.getStateFromStores = this.getStateFromStores.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        this.state = this.getStateFromStores();
    }

    getStateFromStores() {
        return {
            channelUsers: ChannelStore.getChannelUsers(),
            userRole: ChannelStore.getUserRole()
        }
    }

    onStoreChange () {
        this.setState(this.getStateFromStores());
    }

    componentWillMount() {
        // Subscribe to our store so we know when something changes, triggering a render update
        // ChannelStore.addListener('CHANNEL_UPDATE', this.onStoreChange );
    }

    componentWillUnmount() {
        // ChannelStore.removeListener('CHANNEL_UPDATE', this.onStoreChange );
    }

    componentDidUpdate() {
        console.log('Component updated.');
    }

    render() {
        return(
            <div style={Styles} className="header">
                <div style={ Styles.buttonOutline } className="button-outline">
                    In this conversation: {this.state.channelUsers.length}
                </div>
                <div style={ Styles.buttonOutline } className="button-outline">
                    Role: {this.state.userRole}
                </div>
            </div>
        );
    }
}

export default Header;