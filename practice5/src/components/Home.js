import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <h1>Avengers Database</h1>
      <h4>Danger! This is classified information!</h4>
      <Link to="/avengers">Enter</Link>
    </React.Fragment>
  );
}

export default Home;
