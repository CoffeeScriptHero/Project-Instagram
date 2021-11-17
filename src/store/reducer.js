import { combineReducers } from "redux";

import users from "./users";

import user from "./user";

import modal from "./modal";

const reducer = combineReducers({
  user,
  users,
  modal,
});

export default reducer;
