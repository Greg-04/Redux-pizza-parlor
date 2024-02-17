import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Component imports
import PizzaSelection from '../PizzaSelection/PizzaSelection';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import OrderCheckout from '../OrderCheckout/OrderCheckout';
import Home from '../Home/Home';

function App() {
  const dispatch = useDispatch();

  const fetchPizzaList = () => {
    axios
      .get('/api/pizza')
      .then((response) => {
        // send data to data to redux
        dispatch({ type: 'SET_PIZZA_LIST', payload: response.data });
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  };

  useEffect(() => {
    fetchPizzaList();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pizzaSelection">
            <PizzaSelection fetchPizzaList={fetchPizzaList} />
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
