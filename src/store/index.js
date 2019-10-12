import {createStore} from 'redux';

/* Action Types */
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const GET_TASKS = "GET_TASKS"

let nextId = 0;

/* Action Creators */
export const addTask = task => {
  const newId = nextId;
  nextId += 1;

 return {
  taskName: task.taskName,
  completion: new Date(`${task.date} ${task.time}`).toLocaleString(),
  id: newId,
  done: false,
  type: ADD_TASK}
};

export const removeTask = id => ({
    type: REMOVE_TASK,
    id: Number(id)
});

export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return {
    type: GET_TASKS,
    tasks
  }
}

/* Initial State */
const initialState = {
  tasks: []
};

/* Reducer */
const reducer = (state = initialState, action) => {
  const {taskName, completion, id, done} = action;
  const newTask = {
    taskName,
    completion,
    id,
    done
  };
  switch(action.type){
    case ADD_TASK:
      localStorage.setItem("tasks", JSON.stringify([...state.tasks, newTask]));
      return {...state, tasks: [...state.tasks, newTask]};
    case REMOVE_TASK:
      localStorage.setItem("tasks", JSON.stringify(state.tasks.filter(each => each.id !== action.id)))
      return {...state, tasks: state.tasks.filter(each => each.id !== action.id)};
    case GET_TASKS:
      return {...state, tasks: [...action.tasks]};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
