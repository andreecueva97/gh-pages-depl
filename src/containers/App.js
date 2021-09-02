import React from "react";

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Profile from './Profile';

import { Switch, Route, HashRouter } from "react-router-dom";

function App() {
    return (
      <div>
        <Switch>
          <HashRouter exact path="/" component={Home}/>
          <HashRoute exact path="/login" component={Login} />
          <HashRoute exact path="/register" component={Register} />
          <HashRoute exact path="/profile" component={Profile}/>
        </Switch>
      </div>
    );
}

export default App;