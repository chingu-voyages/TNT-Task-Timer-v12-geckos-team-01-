/*
  Properties of the task objects:
  {
    id: Number,
    taskName: String,
    running: boolean,
    completed: boolean,
    dateStarted: Date object,
    dateCompleted: DateObject,
    isDetailedTask: boolean,
    detailedTaskTimeUnits: String,
    detailedTaskDuration: Number
  }
*/

import {
  ADD_TASK,
  REMOVE_TASK,
  START_TASK,
  PAUSE_TASK,
  COMPLETE_TASK
} from "../actions/types";

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
        JSON.stringify(
          state.taskList.filter(each => each.id !== action.payload)
        )
      );
      return {
        ...state,
        taskList: state.taskList.filter(each => each.id !== action.payload)
      };

    case START_TASK: {
      const newTaskList = state.taskList.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            running: true,
            completed: false
          };
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(newTaskList));

      return {
        ...state,
        taskList: newTaskList
      };
    }

    case PAUSE_TASK: {
      const newTaskList = state.taskList.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            running: false
          };
        }
        return task;
      });

      return {
        ...state,
        taskList: newTaskList
      };
    }

    case COMPLETE_TASK: {
      const newTaskList = state.taskList.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
            running: false
          };
        }
        return task;
      });

      return {
        ...state,
        taskList: newTaskList
      };
    }
    default:
      return state;
  }
};
