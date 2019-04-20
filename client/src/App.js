import React, {Component} from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Rooms from "./pages/Rooms";
import Description from "./pages/Description";
import Tasks from "./pages/Tasks";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomepageLayout from "./pages/HomepageLayout";

const history = createBrowserHistory();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     authenticated: null,
    };
  }

  isAuthenticated = () => {
    this.setState({
       authenticated : true 
    }) 
  }
  //create history, pass it down as a prop and do history.push
  //go throught register and make it match login for rerouting

render () {
  const { authenticated } = this.state;
  return (
    <Router history={history}>
      <div>
        <Switch>
        <Route exact path="/" render={() => (
            authenticated ? (<Redirect to="/rooms"/> ) : ( <HomepageLayout />)
          )}
        />
          <Route exact path="/register" render={() => (<Register history={history}/>)}/>
          <Route exact path="/login" render={() => (<Login history={history} isAuthenticated={this.isAuthenticated} />)} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:id" component={Tasks} />
          <Route exact path="/tasks/:id" component={Description} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
}