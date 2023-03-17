import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/action.js';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div id='main'>
      <button onClick={handleIncrement}>+</button>
      <span data-testid='counter'>{counter}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
