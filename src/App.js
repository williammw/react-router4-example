import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = (props) => <h1>HOME</h1>

class App extends Component {
  render() {
    return (
     <Router>
     <div>
        <Route exact path="/" component={Home} />
        {/*<Route path="/about" render={() => <h1>About</h1>} />*/}
        <Route path="/about" children={({match}) => match &&  <h1>About</h1>} />
      </div>
    </Router>
     
    );
  }
}

export default App;
