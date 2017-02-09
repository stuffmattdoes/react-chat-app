import dispatcher from '../dispatcher/Dispatcher';
import WebAPIUtils from "../utils/WebAPIUtils";

const MessageActions = {

    messageCreate: function(pubnub, channel, message) {
        dispatcher.dispatch({
            type: 'MESSAGE_CREATE',
            message
        });

        WebAPIUtils.messagePublish(pubnub, channel, message);

    }

}

export default MessageActions;