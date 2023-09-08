import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>,
  rootElement
);
