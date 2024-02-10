import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Component imports
import Home from '../Home/Home';
import PizzaSelection from '../PizzaSelection/PizzaSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>

        {/* TODO: put navigation here */}
        <Router>
          <div id="navigationDiv">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/PizzaSelection">Pizza Selection</Link>
              </li>
            </ul>
          </div>

          {/* Routes */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/PizzaSelection">
            <PizzaSelection />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
