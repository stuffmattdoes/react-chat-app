// Libraries
import React, { Component } from 'react';

// Components
import Message from './Message';

class MessagesView extends Component {
    render() {
        return(
          <div style={ Styles } className="app-messages-view">
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
              <Message author="Matthew" text="This right here is some text, huh?" />
          </div>
        );
    }
}

const Styles = {
    overflowY: 'scroll'
}

export default MessagesView;