import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducer from "./reducers/CartReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
    ProductsReducer,CartReducer
});
export const store = createStore(combinedReducer, composeWithDevTools(middleware))