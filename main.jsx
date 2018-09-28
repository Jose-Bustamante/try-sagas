import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import createSagaMidddleware from 'redux-saga';

import Counter from './Counter'
import reducer from './reducers'

import rootSaga from './sagas';

const sagaMiddleWare = createSagaMidddleware();

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

const action = type => store.dispatch({ type })

const onIncrement = () => action('INCREMENT');

const onDecrement = () => action('DECREMENT');

const onIncrementAsync = () => action('INCREMENT_ASYNC');

const onDecrementAsync = () => action('DECREMENT_ASYNC');

const onRequestDog = () => action('REQUEST_DOG');

export const countSelector = () => store.getState().counter;

const renderApp = () => render( 
    <Counter 
        storeValues = { store.getState() }
        onDecrement = { onDecrement }
        onIncrement = { onIncrement }
        onIncrementAsync = { onIncrementAsync }
        onDecrementAsync = { onDecrementAsync }
        onRequestDog = { onRequestDog }
    />, document.getElementById('root'));

renderApp();

store.subscribe(renderApp);
