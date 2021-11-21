import { createStore ,combineReducers } from 'redux';

import CartReducer from './reducers/cart';

const RootReducer = combineReducers({
    cart: CartReducer,
});

export const store = createStore(RootReducer);