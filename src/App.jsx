import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import Home from "./screens/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/holi">
              <h1>Holi</h1>
            </Route>
            <Route exact path="/adios">
              <h1>Adios</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
