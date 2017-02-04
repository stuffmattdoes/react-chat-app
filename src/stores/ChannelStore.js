// Libraries
import { EventEmitter } from "events";
import dispatcher from '../dispatcher/Dispatcher';

// Stores
import MessageStore from './MessageStore';

var _channelUsers = ['matthew', 'Cool Guy 420'];
var _userRole = 'Subscriber';
var CHANGE_EVENT = 'CHANNEL_UPDATE';
var _usersTyping = [];
var _username = 'Matthew Morrison';

class ChannelStore extends EventEmitter {
    addUser(username) {
        let userExists = _channelUsers.indexOf(username);

        if (userExists < 0) {
            _username = username;
        } else {

        }

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
            case 'USER_ADD' : {
                this.addUser(action.username);
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