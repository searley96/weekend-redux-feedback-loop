import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducer
const addFeelings = (state = {}, action) => {
    if (action.type === "SAVE_FEELING") {
        return action.payload;
    }
    return state;
}

const addUnderstanding = (state = {}, action) => {
    if (action.type === "SAVE_UNDERSTANDING") {
        return action.payload;
    }
    return state;
}

const addSupported = (state = {}, action) => {
    if (action.type === "SAVE_SUPPORTED") {
        return action.payload;
    }
    return state;
}

const addComments = (state = {}, action) => {
    if (action.type === "SAVE_COMMENTS") {
        return action.payload;
    }
    return state;
}



//store
const storeInstance = createStore(
    combineReducers({
        addFeelings,
        addUnderstanding,
        addSupported,
        addComments,
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
