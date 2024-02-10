import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Component imports
import PizzaSelection from '../PizzaSelection/PizzaSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>

        {/* TODO: put navigation here */}
        <Router>
          <div id="navigationDiv">
            <ul id="nav">
              <li>
                <Link to="/PizzaSelection">Pizza Selection</Link>
              </li>
            </ul>
          </div>
          <Route path="/PizzaSelection" exact>
            <PizzaSelection />
          </Route>
        </Router>
      </header>

      <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
