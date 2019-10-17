import { CHANGE_TAB } from "./types";

export const changeTab = tabNum => {
  return {
    type: CHANGE_TAB,
    payload: tabNum
  };
};

export const stopLint = () => null;
