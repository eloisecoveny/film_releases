import React, { Component } from 'react';
import './Film.css';

class Film extends Component {
  render(){
    const { title, link } = this.props

    return (
      <div className="film">
        <ul>
          <li><a href={link}>{title}</a></li>
        </ul>
      </div>
    )
  }
}

export default Film;
