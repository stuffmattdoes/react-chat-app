import dispatcher from '../dispatcher/Dispatcher';
// import WebAPIUtils from "../utils/WebAPIUtils";

const ServerActions = {

    userAddedCallback: function(message) {
        console.log(message);
    },

    channelSubscribeCallback: function(message) {
        // console.log(message);
        dispatcher.dispatch({
            type: 'MESSAGE_RECEIVE',
            message
        });
    },

    messagePublishCallback: function(status, response) {
        // dispatcher.dispatch({
        //     type: 'CREATE_MESSAGE',
        //     message
        // });

        // console.log(status, response);
    }

}

export default ServerActions;