var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux')

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//component being rendered
const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

import { createStore } from 'redux' // npm module syntax
const store = createStore(counter);

const render = () => {
  ReactDOM.render(<Counter 
    value={store.getState()}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
  />, document.getElementById('app'));
}

store.subscribe(render)
render() 


