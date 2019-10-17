import { CHANGE_TAB } from "../actions/types";

const initialState = {
  currentTab: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        currentTab: action.payload
      };
    default:
      return state;
  }
};
