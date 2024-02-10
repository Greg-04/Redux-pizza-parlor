import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
  if (action.type === 'SET_PIZZA_LIST') {
    return action.payload;
  }

  return state;
};

const orderList = (state = [], action) => {
  if (action.type === 'SET_ORDER_LIST') {
    return action.payload;
  }

  return state;
};

const store = createStore(
  combineReducers({
    pizzaList,
    orderList, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger)
);

export default store;
