import React from 'react';
import axios from 'axios';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom';
// Component imports
import PizzaSelection from '../PizzaSelection/PizzaSelection';
import CustomerInfo from './CustomerInfo/CustomerInfo';
import OrderCheckout from '../OrderCheckout/OrderCheckout';
import Home from '../Home/Home';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pizzaSelection">
            <PizzaSelection/>
          </Route>
          <Route path="/orderCheckout" exact>
            <OrderCheckout />
          </Route>
         <Route path="/customerInfo" exact>
            <CustomerInfo />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
