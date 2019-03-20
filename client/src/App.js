import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Detail from "./pages/Detail";
import Tasks from "./pages/Tasks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Rooms} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:id" component={Tasks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
