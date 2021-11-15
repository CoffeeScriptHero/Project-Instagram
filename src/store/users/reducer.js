import types from "./types";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS: {
      return {...state, data: action.payload}
    }
    default:
      return state
  }
};

export default reducer;
