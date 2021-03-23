import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = { 
  todos: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.payload]}
    case 'REMOVE_TODO':
      return {...state, todos: [...state.todos.filter(item => item.id !== action.payload.id)]}
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
