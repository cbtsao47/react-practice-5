import React from "react";
import { Route, Link } from "react-router-dom";
import avengers from "../data";
import AvengerDetails from "./AvengerDetails";
import Movies from "./Movies";
const Avenger = props => {
  // console.log(props);
  //check id on param and see if it matches the one on the data
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id);
  // console.log(avenger);
  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
      </div>
      <Link to={`/avengers/${avenger.id}/details`}>Avenger Details</Link>
      <Link to={`/avengers/${avenger.id}/movies`}>Movies</Link>
      <Route
        path="/avengers/:id/details"
        render={props => (
          <AvengerDetails {...props} details={avenger.description} />
        )}
      />
      <Route
        path="/avengers/:id/movies"
        render={props => <Movies {...props} movies={avenger.movies} />}
      />
    </div>
  );
};
export default Avenger;
