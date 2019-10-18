/*
  Properties of the task objects:
  {
    id: Number,
    taskName: String,
    running: boolean,
    dateStarted: Date object,
    dateCompleted: DateObject
  }
*/

import { ADD_TASK, REMOVE_TASK } from "../actions/types";

/* Initial State */
const tasksFromLocalState = JSON.parse(localStorage.getItem("tasks")) || [];
const highestId = tasksFromLocalState.length
  ? Math.max(...tasksFromLocalState.map(each => each.id))
  : 0;

const initialState = {
  taskList: tasksFromLocalState,
  availableId: highestId + 1
};

/* Reducer */
export default (state = initialState, action) => {
  const newId = state.availableId;

  switch (action.type) {
    case ADD_TASK: {
      const newTask = action.payload;

      localStorage.setItem(
        "tasks",
        JSON.stringify([...state.taskList, newTask])
      );
      return {
        ...state,
        availableId: newId + 1,
        taskList: [...state.taskList, newTask]
      };
    }
    case REMOVE_TASK:
      localStorage.setItem(
        "tasks",
        JSON.stringify(state.taskList.filter(each => each.id !== action.id))
      );
      return {
        ...state,
        tasks: state.taskList.filter(each => each.id !== action.id)
      };
    default:
      return state;
  }
};
