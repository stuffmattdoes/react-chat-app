// Libraries
import { EventEmitter } from "events";
import dispatcher from '../dispatcher/Dispatcher';

// Stores
import MessageStore from './MessageStore';

var _activeUsers;
var _userRole = 'Subscriber';
var CHANGE_EVENT = 'CHANNEL_UPDATE';
var _usersTyping = [];
var _username = 'Matthew Morrison';

class ChannelStore extends EventEmitter {
    getUser() {
        return _username;
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
            case "USER_TYPING_ADD" : {
                this.userTypingAdd();
                break;
            }
            case "USER_TYPING_REMOVE" : {
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