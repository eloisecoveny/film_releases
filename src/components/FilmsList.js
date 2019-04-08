import React, { Component } from 'react';
import Film from "./Film";
import './FilmsList.css';

class FilmsList extends Component {
  render(){

    const filmNodes = this.props.data.map(film => {
      return (
        <Film key={film.id} title={film.name} link={film.url}></Film>
      )
    })
    return (
      <div className="films-list">
        {filmNodes}
        <hr/>
          <button id="button"><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a></button>
        </div>
    )
  }
}

export default FilmsList;
