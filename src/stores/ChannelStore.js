// Libraries
import { EventEmitter } from "events";
import dispatcher from '../dispatcher/Dispatcher';

// Stores
// import MessageStore from './MessageStore';

let _channelUsers = ['matthew', 'Cool Guy 420'];
let _userRole = 'Subscriber';
let CHANGE_EVENT = 'CHANNEL_UPDATE';
let _usersTyping = [];
let _username = '';
let _pubnub = {};
let _currentChannel = 'GeneralChat';

class ChannelStore extends EventEmitter {
    addUser(username) {
        let userExists = _channelUsers.indexOf(username);

        if (userExists < 0) {
            _username = username;
        } else {

        }

        this.emit(CHANGE_EVENT);
    }

    getUser() {
        return _username;
    }

    getChannelUsers() {
        return _channelUsers;
    }

    getUserRole() {
        return _userRole;
    }

    getUsersTyping() {
        return _usersTyping;
    }

    getChannel() {
        return _currentChannel;
    }

    setChannel(channel) {
        _currentChannel = channel;
        this.emit(CHANGE_EVENT);
    }

    pubnubInit(pubnub) {
        _pubnub = pubnub;
        this.emit(CHANGE_EVENT);
    }

    pubnubGet() {
        return _pubnub;
    }

    userTypingAdd() {
        const userToAddAt = _usersTyping.indexOf(_username);

        if (userToAddAt < 0) {
            _usersTyping.push(_username);
        }

        this.emit(CHANGE_EVENT);
    }

    userTypingRemove() {
        const userToRemoveAt = _usersTyping.indexOf(_username);

        if (userToRemoveAt > -1) {
            _usersTyping.splice(userToRemoveAt);
        }

        this.emit(CHANGE_EVENT);
    }

    handleActions(action) {
        switch(action.type) {
            case 'GET_CHANNEL_USERS': {
                this.getChannelUsers();
                break;
            }
            case 'PUBNUB_INIT': {
                this.pubnubInit(action.pubnub);
                break;
            }
            case 'USER_ADD' : {
                this.addUser(action.username);
                break;
            }
            case 'USER_TYPING_ADD' : {
                this.userTypingAdd();
                break;
            }
            case 'USER_TYPING_REMOVE' : {
                this.userTypingRemove();
                break;
            }
            default : {
                return null;
            }

        }
    }
}

const channelStore = new ChannelStore();
dispatcher.register(channelStore.handleActions.bind(channelStore));

export default channelStore;