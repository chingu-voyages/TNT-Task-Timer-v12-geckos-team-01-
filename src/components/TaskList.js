import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {removeTask, getTasks} from '../store';

const TaskList = ({tasks, remove, getFromLocalStorage}) => (
    <div>
    <ul>
      {tasks.map(task => (
      <div key={task.id}>
      <h4>{task.taskName}</h4>
      <p>To be completed: {task.completion}</p>
      <Button id={task.id} onClick={remove}>Remove</Button>
      </div>
      ))}
    </ul>
    <Button onClick={getFromLocalStorage}>Get From Local</Button>
    </div>
  );

TaskList.propTypes = {
  remove: PropTypes.any.isRequired,
  tasks: PropTypes.array.isRequired,
  getFromLocalStorage: PropTypes.any.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => {
  return {
    remove(event){
      dispatch(removeTask(event.target.id))
    },
    getFromLocalStorage(){
      dispatch(getTasks())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
