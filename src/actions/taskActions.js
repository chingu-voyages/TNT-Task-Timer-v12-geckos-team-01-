import {
  ADD_TASK,
  REMOVE_TASK,
  START_TASK,
  PAUSE_TASK,
  COMPLETE_TASK
} from "./types";

/* Action Creators */
export const addTask = task => {
  return {
    payload: task,
    type: ADD_TASK
  };
};

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: Number(id)
});

export const startTask = id => ({
  type: START_TASK,
  payload: id
});

export const pauseTask = id => ({
  type: PAUSE_TASK,
  payload: id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  payload: id
});
