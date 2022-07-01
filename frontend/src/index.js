import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from "redux-thunk" 
import { applyMiddleware } from 'redux';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import messagesReducer from './reducers/messages';
import roomsReducer from './reducers/rooms';

const reducer = combineReducers({
  messages: messagesReducer,
  rooms: roomsReducer
})

const store = createStore(reducer, applyMiddleware(thunk)) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>
);

