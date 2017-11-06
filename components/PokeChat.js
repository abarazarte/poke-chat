/*
 * Module dependencies
 */

import React from 'react/addons';
import PokeMessage from './PokeMessage';

const { CSSTransitionGroup } = React.addons;

export default class PokeChat extends React.Component {
  render() {
    return <ul className = "pokechat" >
      <ReactCSSTransitionGroup transitionName = "message-animation" > 
        {
          this.props.messages.map((message) => {
            return <PokeMessage key = {
              message.id
            }
            message = {
              message.text
            }
            />;
          })
        } 
      </ReactCSSTransitionGroup> 
    </ul>;
  }
}

PokeChat.defaultProps = {
  messages: []
};