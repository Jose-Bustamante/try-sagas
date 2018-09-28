const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";


const initialState = {
  counter: 0,
  fetching: false,
  dog: null,
  error: null,
}
export default (state = initialState, action) => {
   switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
      break;
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
      break;
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
      break;
    default:
      return state;
  }
}
