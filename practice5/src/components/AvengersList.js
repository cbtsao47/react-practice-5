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
          <h2>
            {/* using history object to do it instead of Link */}
            <div onClick={() => routeToAvenger(props, avenger)}>
              {avenger.name}
            </div>
          </h2>
          <p>({avenger.nickname})</p>
        </div>
      ))}
    </div>
  );
}
function routeToAvenger(props, avenger) {
  props.history.push(`/avengers/${avenger.id}`);
}

export default AvengersList;
