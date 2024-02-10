import React from 'react';
import axios from 'axios';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom';
import CustomerInfo from './CustomerInfo/CustomerInfo';

function App() {
  return (
    <>
      <div>
        <Router>
          <Route path="/customerInfo" exact>
            <CustomerInfo />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
