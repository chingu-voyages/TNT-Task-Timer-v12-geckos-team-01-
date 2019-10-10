import React, { Component } from 'react'
import {connect} from 'react-redux'

class NewTask extends Component {
  constructor(props){
    super(props);
    this.taskName = ""
    this.tasks = props.tasks
  }

  render(props) {
    return (
      <div>
        Name: <input type="text" name="taskName" onChange={this.setState(
          this.taskName = this.value
        )} ></input>
        <input type="submit" value="Submit"></input>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(NewTask)
