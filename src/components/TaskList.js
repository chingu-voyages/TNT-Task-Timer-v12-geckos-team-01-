import React from 'react'
import {connect} from 'react-redux'

const TaskList = props => (
    <ul>
      {props.tasks.map(task => (
      <li key={task.id}>{task.taskName}</li>
      ))}
    </ul>
)

const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(TaskList)
