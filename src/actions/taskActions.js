import { ADD_TASK, REMOVE_TASK } from "./types";

/* Action Creators */
export const addTask = task => {
  return {
    taskName: task.taskName,
    completion: new Date(`${task.date} ${task.time}`).toLocaleString(),
    done: false,
    type: ADD_TASK
  };
};

export const removeTask = id => ({
  type: REMOVE_TASK,
  id: Number(id)
});
