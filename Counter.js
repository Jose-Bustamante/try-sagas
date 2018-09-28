/*eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ onRequestDog, storeValues, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync }) =>
      <div>
        <button onClick={onIncrement} id='increment'>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement} id='decrement'>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync} id='incrementAsync'>Increment After One Second</button>
        {' '}
        <button onClick={onDecrementAsync} id='decrementAsync'>Decrement After One Second</button>
        {' '}
        <button onClick={onRequestDog} id='requestDog'>Request Dog</button>
        <hr />
        <div>
          Clicked: {storeValues.counter} times
        </div>
        {storeValues.dog && 
          <div style={{
            backgroundImage: `url(${storeValues.dog})`,
            width: '500px',
            height: '500px',
            backgroundSize: "cover",
          }} />
        }
      </div>

Counter.propTypes = {
  storeValues: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRequestDog: PropTypes.func.isRequired
}

export default Counter
