import { applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk'
import { 
    productListReducer,
    productDetailsReducer,
} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const initialState = {
    cart: { cartItems : cartItemsFromStorage },
};

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
