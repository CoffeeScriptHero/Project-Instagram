import { combineReducers } from "redux";

import users from "./users";

import modal from "./modal";

const reducer = combineReducers({
  users,
  modal,
});

export default reducer;
