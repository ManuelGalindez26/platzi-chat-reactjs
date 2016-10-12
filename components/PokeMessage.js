/*
 * Module dependencies
 */

import React from 'react';

export default class PokeMessage extends React.Component {
  render() {
    return <li className="pokemessage">
      <h2 className="pokemessage-user">
        {`${this.props.message.user} dijo:`}
      </h2>

      <p className="pokemessage-text">
        {this.props.message.text}
      </p>


    </li>
  }
}
