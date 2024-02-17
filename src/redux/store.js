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

const addPizzaToCart = (state = '', action) => {
  if (action.type === 'ADD_ITEM_TO_CART') {
    return [...state, action.payload];
  } // end of ADD_ITEM_TO_CART
  if (action.type === 'REMOVE_ITEM_FROM_CART') {
    return [...state, action.payload];
  } // end of REMOVE_ITEM_FROM_CART
  // always return state:
  return state;
};

const store = createStore(
  combineReducers({
    pizzaList,
    orderList, // 👈 Be sure to replace this, too!
    addPizzaToCart,
  }),
  applyMiddleware(logger)
);

export default store;
