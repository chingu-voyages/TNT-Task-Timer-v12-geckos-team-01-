import { ADD_TASK, REMOVE_TASK } from "../actions/types";

// create some fake tasks for testing
// duration is in seconds
const testTasks = [
  { taskName: "Reading a book", date: new Date(), duration: 6000 },
  { taskName: "Working on project", date: new Date(), duration: 4240 },
  { taskName: "Watching TV", date: new Date(), duration: 2400 },
  { taskName: "Eating Lunch", date: new Date(), duration: 1001 },
  { taskName: "Napping", date: new Date(), duration: 985 },
  { taskName: "Refactoring app", date: new Date(), duration: 720 }
];

// set some ids for the tasks
testTasks.forEach((task, index) => {
  // eslint-disable-next-line no-param-reassign
  task.id = index;
});
// set the tasks in the localstorage
localStorage.setItem("tasks", JSON.stringify(testTasks));

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
