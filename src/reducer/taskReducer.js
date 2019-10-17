import { ADD_TASK, REMOVE_TASK } from "../actions/types";

/* Initial State */
const tasksFromLocalState = JSON.parse(localStorage.getItem("tasks")) || [];
const highestId = tasksFromLocalState.length
  ? Math.max(...tasksFromLocalState.map(each => each.id))
  : 0;

const initialState = {
  tasks: tasksFromLocalState,
  availableId: highestId + 1
};

/* Reducer */
export default (state = initialState, action) => {
  const newId = state.availableId;
  const { taskName, completion, done } = action;
  const newTask = {
    taskName,
    completion,
    done,
    id: newId
  };
  switch (action.type) {
    case ADD_TASK:
      localStorage.setItem("tasks", JSON.stringify([...state.tasks, newTask]));
      return {
        ...state,
        availableId: newId + 1,
        tasks: [...state.tasks, newTask]
      };
    case REMOVE_TASK:
      localStorage.setItem(
        "tasks",
        JSON.stringify(state.tasks.filter(each => each.id !== action.id))
      );
      return {
        ...state,
        tasks: state.tasks.filter(each => each.id !== action.id)
      };
    default:
      return state;
  }
};
