import dispatcher from '../dispatcher/Dispatcher';
// import WebAPIUtils from "../utils/WebAPIUtils";

const ChannelActions = {
    addUsername: function(username) {
        dispatcher.dispatch({
            type: 'USER_ADD',
            username
        });
    },

    userTypingAdd: function() {
        dispatcher.dispatch({
           type: 'USER_TYPING_ADD'
        });
    },

    userTypingRemove: function(username) {
        dispatcher.dispatch({
            type: 'USER_TYPING_REMOVE',
            username
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