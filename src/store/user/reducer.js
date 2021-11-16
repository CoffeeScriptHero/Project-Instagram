import types from "./types";

const initialState = {
  user: {},
  // subscriptions:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER: {
      return {...state, user: action.payload}
    }
    default:
      return state;
  }
}

export default reducer