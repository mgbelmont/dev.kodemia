import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import Home from "./screens/Home";
import PostDetail from "./screens/PostDetail";
import AddPost from "./screens/AddPost";
import Challenge from "./screens/Challenge";
import Login from "./screens/Login";
import Exercises from "./screens/Exercises";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts/:id">
              <PostDetail />
            </Route>
            <Route exact path="/createPost">
              <AddPost />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/challenge">
              <Challenge />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
