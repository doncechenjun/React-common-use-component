import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter,Route,Switch} from 'react-router-dom';
import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';

ReactDOM.render(
  (
  <HashRouter>
    <Switch>
      <App>
        <Route exact path="/" component={RouteOne}/>
        <Route path="/two/:id?" component={RouteTwo}/>
      </App>
    </Switch>
  </HashRouter>
),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();