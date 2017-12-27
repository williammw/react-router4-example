import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/index.aspx/about" }}>About</NavLink>
    <NavLink replace to="/contact">Contact</NavLink>
  </nav>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/index.aspx/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App;
