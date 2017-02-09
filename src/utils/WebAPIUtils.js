// Libraries
import * as ServerActions from '../actions/ServerActions';

const WebAPIUtils = {

    channelSubscribe: function(pubnub, channel) {
        pubnub.subscribe({
            channel: channel,
            // widthPresence: true,
            message: (message) => {
                console.log('Subscribe:', message);
                ServerActions.default.channelSubscribeCallback(message);
                // this.setState({
                //     history: this.state.history.concat(message)
                // });
            },
            connect: () => {
                console.log("Connected");
            },
            disconnect: () => {
                console.log("Disconnected");
            },
            reconnect: () => {
                console.log("Reconnected");
            },
            error: () => {
                console.log("Network Error");
            }
        });
    },

    messagePublish: function(pubnub, channel, message) {

        pubnub.publish({
            channel: channel,
            message: message
        },
        (status, response) => {
            ServerActions.default.messagePublishCallback(status, response);
        });

    }
}

export default WebAPIUtils;