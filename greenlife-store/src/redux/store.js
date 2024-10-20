import { createStore } from 'redux';

const initialState = {
  cart: [],
  totalItems: 0,
  totalCost: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
        totalCost: state.totalCost + action.payload.price,
      };
    default:
      return state;
  }
}

const store = createStore(cartReducer);

export default store;
