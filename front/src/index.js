import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/mainPage';
import Operator from './components/operator';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/operator" component={Operator} />
    </Switch>
  </Router>,
  rootElement
);
