import {createStore} from 'redux';

const ADDTASK = "ADDTASK"

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADDTASK:
      const newTasks = [...state.tasks];
      newTasks.push(action.task)
      return {...state, tasks: newTasks};
    default:
    return state;
  }
}

const store = createStore(reducer);

export default store;
