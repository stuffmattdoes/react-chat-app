import dispatcher from '../dispatcher/Dispatcher';
// import WebAPIUtils from "../utils/WebAPIUtils";

const ChannelActions = {
    userTypingAdd: function(user) {
        dispatcher.dispatch({
           type: 'USER_TYPING_ADD'
        });
    },

    userTypingRemove: function(user) {
        dispatcher.dispatch({
            type: 'USER_TYPING_REMOVE',
            user
        });
    }
}

export default ChannelActions;