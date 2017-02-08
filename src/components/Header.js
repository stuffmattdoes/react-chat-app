// Libraries
import React, { Component } from 'react';

// Stores
import ChannelStore from '../stores/ChannelStore';

const Styles = {
    backgroundColor: '#9769C1',
    padding: '10px 15px',
    textAlign: 'right',
    buttonOutline: {
        color: 'white',
        display: 'inline-block',
        fontSize: '10px',
        border: '1px solid #AB87CD',
        padding: '6px 15px',
        marginRight: '8px',
        cursor: 'pointer',
        position: 'relative'
    },
    user: {
        float: 'left',
        display:'inline-block',
        margin: '6px 0 0',
        color: 'white',
        fontSize: '13px',
        fontWeight: 'bold'
    },
    italic: {
        fontSize: '10px',
        fontWeight: 'normal'
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
            uuid: ChannelStore.getUser(),
            userRole: ChannelStore.getUserRole()
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

    render() {
        return(
            <div style={Styles} className="header">
                {this.state.uuid ?
                    <p style={ Styles.user }>{ this.state.uuid } <i style={ Styles.italic } >({ this.state.userRole })</i></p>
                    : '' }
                <div style={ Styles.buttonOutline } className="button-outline">
                    In this conversation: {1}
                </div>
            </div>
        );
    }
}

export default Header;