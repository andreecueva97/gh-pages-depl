import React from "react";

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Profile from './Profile';

import { Switch, Route, } from "react-router-dom";

function App() {
    return (
      <div>
        <Switch>
          <Route exact path="/https://andreecueva97.github.io/gh-pages-depl/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </div>
    );
}

export default App;
