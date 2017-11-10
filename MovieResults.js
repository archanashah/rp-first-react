import React from "react";

export default function( props ) {
  return (
    <div>
      <hr/>
      <table className="table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Rating</th>
        </tr>
        </thead>
        <tbody>

        {props.movies.map( movie => {
          return (
            <tr key={movie.index}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.rating}</td>
            </tr>
          )
        } )}
        </tbody>
      </table>
    </div>
  );
}
