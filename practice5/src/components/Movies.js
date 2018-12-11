import React from "react";

const Movies = props => {
  console.log(props);
  return (
    <div>
      {props.movies.map(movie => (
        <p key={movie}>{movie}</p>
      ))}
    </div>
  );
};
export default Movies;
