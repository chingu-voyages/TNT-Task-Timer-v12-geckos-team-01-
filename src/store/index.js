import {createStore} from 'redux';

/* Action types */
const ADD_TASK = "ADD_TASK"

/* Action Creators */
let nextId = 0;
export const addTask = task => ({
  taskName: task.taskName,
  time: task.time,
  date:task.date,
  id: nextId++,
  type: ADD_TASK
})

/* Initial State */
const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TASK:
      const {taskName, time, date, id} = action;
      const newTask = {
        taskName,
        time,
        date,
        id
      };
      return {...state, tasks: [...state.tasks, newTask]};
    default:
    return state;
  }
}

const store = createStore(reducer);

export default store;
