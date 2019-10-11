import React from 'react'
import {connect} from 'react-redux'
import {removeTask} from '../store'
import {Button} from 'react-bootstrap'

const TaskList = props => (
    <ul>
      {props.tasks.map(task => (
      <div key={task.id}>
      <h4>{task.taskName}</h4>
      <p>To be completed: {task.completion}</p>
      <Button id={task.id} onClick={props.remove}>Remove</Button>
      </div>
      ))}
    </ul>
)

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => {
  return {
    remove: function(event){
      dispatch(removeTask(event.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
