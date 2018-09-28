import { delay } from 'redux-saga';
import { put, takeEvery, all, call, takeLatest, select, throttle } from 'redux-saga/effects';
import { fetchDog } from './service';
import { countSelector } from './main.jsx';

export function* helloSaga(){
    console.log('Hello Saga');
}

// 3.- Fire the action "API_CALL_REQUEST" after every "INCREMENT"
export function* incrementAsync() {
    yield call(delay, 3000);
    yield put({ type: 'INCREMENT'});
}

export function* decrementAsync() {
    yield call(delay, 1000);
    yield put({ type: 'DECREMENT'});
}


// --------------- WORK! ------------- //

function* requestDog() {
    // 4.- Select counter amount from the state with effect Select "countSelector"
    // const count = ??? 

    if(count > 3) {
        try {
            // 5.- If counter is higher than 3, request dog immage, "fetchDog" is the service to be used.
            //const response = ???
            const dog = response.data.message;
        
            // 6.- dispatch a success action to the store with the new dog "API_CALL_SUCCESS"
        
        } catch (error) {
            // 7.- dispatch a failure action to the store with the error "API_CALL_FAILURE"
        }
    } else {
        // dispatch a failure action to the store with the error "API_CALL_FAILURE"
        yield put({ type: "REQUEST_DOG_FAILURE", error: 'counter not high enogh' });
    }
  }

// --------------- WATCHERS ------------------ //
// 1.- Build the watcher. Action to be watch: "API_CALL_REQUEST", make sure you cannot fire multiple requests at once.
// export function...


export function* watchIncrementAsync() {
    yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}

export function* watchDecrementAsync() {
    yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

// -----------ROOT SAGAS ------------ //
// 2.- Add your new watcher to the root sagas 
export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchDecrementAsync(),
    ]);
};
