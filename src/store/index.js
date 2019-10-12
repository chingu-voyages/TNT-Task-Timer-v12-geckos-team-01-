import {createStore} from 'redux';

/* Action Types */
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";


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

/* Initial State */
const tasksFromLocalState = JSON.parse(localStorage.getItem("tasks")) || []
const highestId = tasksFromLocalState.length ? Math.max(...tasksFromLocalState.map(each => each.id)) : 0

const initialState = {
  tasks: tasksFromLocalState,
  availableId: highestId + 1
};

/* Reducer */
const reducer = (state = initialState, action) => {
  const newId = state.availableId;
  const {taskName, completion, done} = action;
  const newTask = {
    taskName,
    completion,
    done,
    id: newId
  };
  switch(action.type){
    case ADD_TASK:
      localStorage.setItem("tasks", JSON.stringify([...state.tasks, newTask]));
      return {...state, availableId: newId + 1, tasks: [...state.tasks, newTask]};
    case REMOVE_TASK:
      localStorage.setItem("tasks", JSON.stringify(state.tasks.filter(each => each.id !== action.id)))
      return {...state, tasks: state.tasks.filter(each => each.id !== action.id)};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
