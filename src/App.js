import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const isActiveFunc = (match, location) => {
  console.log(match, location)
  return match;
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color:'green'}} to={{ pathname: "/index.aspx/about" }}>About</NavLink>
    <NavLink 
    isActive={isActiveFunc}
    activeClassName="active"
     to="/contact">Contact</NavLink>
  </nav>
)

const App = (props) => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/index.aspx/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
      <Route path="/:page?-:subpage" render={({match}) => (
        <h1>
          PAGE: {match.params.page || 'GGome'}<br />
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
);
// step 1
// <Route path="/:page" render={({match}) => (
//   <h1>
//     PAGE: {match.params.page || 'GGome'}
//   </h1>
// )} />

// important
// <Route path="/:page?/:subpage" 
// <Route path="/:page?-:subpage" 
// 
export default App;
