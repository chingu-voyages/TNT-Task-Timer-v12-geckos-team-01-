import {createStore} from 'redux';

/* Action Types */
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

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
  type: ADD_TASK
  };
};

export const removeTask = id => ({
    type: REMOVE_TASK,
    id: Number(id)
});

/* Initial State */
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || []
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
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
