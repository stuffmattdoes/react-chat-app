// Libraries
import { EventEmitter } from "events";
import dispatcher from '../dispatcher/Dispatcher';

// Stores
import ChannelStore from './ChannelStore';

var _messages = [];
const CHANGE_EVENT = 'MESSAGES_UPDATE';

class MessageStore extends EventEmitter {
    getAllMessages() {
        // console.log(_messages);
        return _messages;
    }

    messageCreate(message) {

        var newMessage = {
            author: message.Who,
            text: message.What,
            timestamp: message.When
        }

        _messages.push(newMessage);
        this.emit(CHANGE_EVENT);
    }

    messageReceive(message) {
        console.log('Message received:', message);
        _messages.push(message);
        this.emit(CHANGE_EVENT);
    }

    handleActions(action) {
        switch(action.type) {
            case "MESSAGE_CREATE" : {
                this.messageCreate(action.message);
                break;
            }
            case 'MESSAGE_RECEIVE': {
                this.messageReceive(action.message);
                break;
            }
            default : {
                return null;
            }

        }
    }
}

const messageStore = new MessageStore();

/*
 Registers our store with our dispatcher to provide it with callback functions
 (pretty much any of the functions above). These callback functions receive
 actions as parameters, which are then interpreted by the Switch statement.
 Finally, the payload of the action is taken in by the store's internal methods
 */
dispatcher.register(messageStore.handleActions.bind(messageStore));

export default messageStore;