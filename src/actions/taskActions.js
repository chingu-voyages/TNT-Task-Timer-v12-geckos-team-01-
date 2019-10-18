import { ADD_TASK, REMOVE_TASK } from "./types";

/* Action Creators */
export const addTask = task => {
  console.log("Adding: ", task);
  return {
    payload: task,
    type: ADD_TASK
  };
};

export const removeTask = id => ({
  type: REMOVE_TASK,
  id: Number(id)
});
