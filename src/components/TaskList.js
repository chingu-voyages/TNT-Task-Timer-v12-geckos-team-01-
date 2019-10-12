import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {removeTask} from '../store';

const TaskList = ({tasks, remove}) => (
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
    </div>
  );

TaskList.propTypes = {
  remove: PropTypes.any.isRequired,
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  remove(event){
    dispatch(removeTask(event.target.id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
