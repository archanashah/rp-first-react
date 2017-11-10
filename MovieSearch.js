import React from "react";

export default function(props) {
  function clickHandler(event) {
    event.preventDefault();
    props.onSearch(event.target.elements['movie-search'].value);
  }

  return (
    <div>
      <h3>Search for a movie!</h3>
      <form onSubmit={clickHandler}>
        <div className="form-group">
          {/*<label htmlFor="movie-search">Search by Title:</label>*/}
          <input className="form-control" type="text" id="movie-search" />
        </div>

        <button className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
