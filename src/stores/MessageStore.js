// Libraries
import { EventEmitter } from "events";
import dispatcher from '../dispatcher/Dispatcher';

// Stores
import ChannelStore from './ChannelStore';

var _messages = [];
var _username = 'Matthew Morrison';
const CHANGE_EVENT = 'MESSAGES_UPDATE';

class MessageStore extends EventEmitter {
    getAllMessages() {
        return _messages;
    }

    messageCreate(messageText) {
        var newMessage = {
            id: 'm_1',
            author: ChannelStore.getUser(),
            text: messageText,
            timestamp: Date.now()
        }

        // console.log(newItem);

        _messages.push(newMessage);

        this.emit(CHANGE_EVENT);
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_MESSAGE" : {
                this.messageCreate(action.messageText);
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