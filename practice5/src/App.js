import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import avengers from "./data";
import Avenger from "./components/Avenger";
import { Link } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }
  render() {
    const avengers = this.state.avengers;
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/avengers">Avengers</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/avengers"
          render={props => <AvengersList {...props} avengers={avengers} />}
        />
        <Route
          path="/avengers/:id"
          render={props => <Avenger {...props} avengers={avengers} />}
        />
      </div>
    );
  }
}

export default App;
