import types from "./types";

const initialState = {
  showModal: false,
  settings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        showModal: !state.showModal,
      };
    }
    case types.CUSTOMIZE_MODAL: {
      return {
        ...state,
        settings: action.payload,
        showModal: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
