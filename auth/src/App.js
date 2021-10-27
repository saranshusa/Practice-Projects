import React from "react";
import Auth from "./Auth";
import Todo from "./Todo";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/todo' exact component={Todo} />
      </Switch>
    </Router>   

  );
}

export default App;
