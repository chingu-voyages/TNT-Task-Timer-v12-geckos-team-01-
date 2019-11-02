/*
  Properties of the task objects:
  {
    id: Number,
    taskName: String,
    running: boolean,
    completed: boolean,
    dateStarted: Date object, // this should be called dateCreated
    timerStatusArray: [],
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
  COMPLETE_TASK,
  DELETE_ALL_TASKS
} from "../actions/types";

const saveToLocalStorage = taskList => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};

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

      // localStorage.setItem(
      //   "tasks",
      //   JSON.stringify([...state.taskList, newTask])
      // );

      saveToLocalStorage([...state.taskList, newTask]);

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

    /*
     * START_TASK - action started by clicking "Start Task" in the
     * TaskControl Component.
     */

    case DELETE_ALL_TASKS: {
      saveToLocalStorage([]);
      return {
        ...state,
        taskList: []
      };
    }

    case START_TASK: {
      // get the status of the task
      const { taskList } = state;

      const newTaskList = taskList.map(task => {
        if (task.id === action.payload && !task.running) {
          // find out if the task is not started or if it is currently paused
          const { timerStatusArray } = task;

          // timer is currently paused, so record the date that it is resumed
          const now = new Date();
          const status = { status: "started", when: now };
          return {
            ...task,
            running: true,
            completed: false,
            timerStatusArray: [...timerStatusArray, status],
            dateStarted: task.dateStarted || new Date()
          };

          // } else {
          //   // timer is not paused and probably hasn't been started
          //   return {
          //     ...task,
          //     running: true,
          //     completed: false,
          //     dateStarted: new Date()
          //   };
        }
        return task;
      });

      saveToLocalStorage(newTaskList);
      return {
        ...state,
        taskList: newTaskList
      };
    }

    case PAUSE_TASK: {
      const now = new Date();

      const newTaskList = state.taskList.map(task => {
        if (task.id === action.payload && task.running) {
          return {
            ...task,
            timerStatusArray: [
              ...task.timerStatusArray,
              { status: "paused", when: now }
            ],
            running: false
          };
        }
        return task;
      });

      saveToLocalStorage(newTaskList);

      return {
        ...state,
        taskList: newTaskList
      };
    }

    case COMPLETE_TASK: {
      const completionDate = new Date();

      const newTaskList = state.taskList.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
            timerStatusArray: [
              ...task.timerStatusArray,
              { status: "paused", when: completionDate }
            ],
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
