import {createStore} from 'redux';

/* Action types */
const ADD_TASK = "ADD_TASK"
const REMOVE_TASK = "REMOVE_TASK"

let nextId = 0;

/* Action Creators */
export const addTask = task => ({
  taskName: task.taskName,
  completion: new Date(`${task.date} ${task.time}`).toLocaleString(),
  id: nextId++,
  type: ADD_TASK
})

export const removeTask = id => ({
    type: REMOVE_TASK,
    id: Number(id)
})

/* Initial State */
const initialState = {
  tasks: []
};

/* Reducer */
const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TASK:
      const {taskName, completion, id} = action;
      const newTask = {
        taskName,
        completion,
        id
      };
      return {...state, tasks: [...state.tasks, newTask]};
    case REMOVE_TASK:
      return {...state, tasks: state.tasks.filter(each => each.id !== action.id)}
    default:
    return state;
  }
}

const store = createStore(reducer);

export default store;
