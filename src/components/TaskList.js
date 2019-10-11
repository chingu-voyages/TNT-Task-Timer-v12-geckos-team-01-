import React from 'react'
import {connect} from 'react-redux'

const TaskList = props => (
    <ul>
      {props.tasks.map(task => (
      <div key={task.id}>
      <h4>{task.taskName}</h4>
      <p>To be completed: {task.completion}</p>
      </div>
      ))}
    </ul>
)

const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(TaskList)
