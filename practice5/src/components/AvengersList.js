import React from "react";
import { Link } from "react-router-dom";
// import { prependOnceListener } from "cluster";

function AvengersList(props) {
  // console.log(props);
  return (
    <div className="characters-list-wrapper">
      {props.avengers.map(avenger => (
        <div className="character-card" key={avenger.id}>
          <img src={avenger.thumbnail} alt={avenger.name} />
          <Link to={`/avengers/${avenger.id}`}>
            <h2>{avenger.name}</h2>
          </Link>
          <p>({avenger.nickname})</p>
        </div>
      ))}
    </div>
  );
}

export default AvengersList;
