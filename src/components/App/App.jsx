import React from 'react';
import axios from 'axios';
import './App.css';
import OrderCheckout from '../OrderCheckout/OrderCheckout';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <div className="App">
        {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}

        <Router>
          <Route path="/" exact>
            <Header />
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
