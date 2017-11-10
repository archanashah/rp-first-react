import React from "react";
import MovieSearch from "./MovieSearch";
import MovieResults from './MovieResults';

export default class MovieManager extends React.Component {
  constructor() {
    super();

    this.state = {
      showResults: false
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(msg) {
    console.log("MovieManager is handling an onSearch event.");
    console.log("The message was ", msg);
    this.setState({ showResults: true });
  }

  render() {
    let results = "";
    if (this.state.showResults === true) {
      results = <MovieResults/>
    }

    return (
      <section>
        <h2>This is the Movie Manager</h2>
        <MovieSearch onSearch={this.searchHandler} />
        {results}
      </section>
    );
  }
}
