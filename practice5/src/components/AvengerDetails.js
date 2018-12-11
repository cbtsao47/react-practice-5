import React from "react";

const AvengerDetails = props => {
  console.log(props);
  return (
    <div>
      <p>{props.details}</p>
    </div>
  );
};
export default AvengerDetails;
