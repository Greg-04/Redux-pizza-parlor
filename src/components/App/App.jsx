import React from 'react';
import axios from 'axios';
import './App.css';
import OrderCheckout from '../OrderCheckout/OrderCheckout';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/orderCheckout" exact>
            <OrderCheckout />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
