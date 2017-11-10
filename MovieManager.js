import React from "react";

import MovieSearch from "./MovieSearch";
import MovieResults from './MovieResults';

export default class MovieManager extends React.Component {
  constructor() {
    super();
    this.state = {
      showResults: false,
      movies     : []
    };
    this.searchHandler = this.searchHandler.bind( this );
  }

  searchHandler( title ) {
    fetch( 'http://localhost:8001/movies?title_like=' + title )
      .then( results => results.json() )
      .then( movies => {
        console.log( 'Movies: ', movies );
        this.setState( {
          showResults: true,
          movies
        } );
      } );
  }

  render() {
    let results = "";
    if ( this.state.showResults === true ) {
      results = <MovieResults movies={this.state.movies}/>
    }

    return (
      <section>
        <MovieSearch onSearch={this.searchHandler}/>
        {results}
      </section>
    );
  }
}
