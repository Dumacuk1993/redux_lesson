import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})

export const store = createStore(rootReducer, composeWithDevTools())