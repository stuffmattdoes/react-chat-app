import dispatcher from '../dispatcher/Dispatcher';
// import WebAPIUtils from "../utils/WebAPIUtils";

const MessageActions = {

    messageCreate: function(messageText) {
        dispatcher.dispatch({
            type: 'CREATE_MESSAGE',
            messageText
        });
    }

}

export default MessageActions;