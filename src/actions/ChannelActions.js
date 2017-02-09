import dispatcher from '../dispatcher/Dispatcher';
import WebAPIUtils from "../utils/WebAPIUtils";

const ChannelActions = {
    addUsername: function(username) {
        dispatcher.dispatch({
            type: 'USER_ADD',
            username
        });
    },

    channelSubscribe: function(pubnub, channel) {
        WebAPIUtils.channelSubscribe(pubnub, channel);
    },

    userTypingAdd: function() {
        dispatcher.dispatch({
           type: 'USER_TYPING_ADD'
        });
    },

    userTypingRemove: function() {
        dispatcher.dispatch({
            type: 'USER_TYPING_REMOVE'
        });
    },

    pubnubInit: function(pubnub) {

        dispatcher.dispatch({
            type: 'PUBNUB_INIT',
            pubnub
        })
    }
}

export default ChannelActions;