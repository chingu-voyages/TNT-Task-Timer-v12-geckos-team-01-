import React, { Component } from 'react'
import {connect} from 'react-redux'

class NewTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName : "",
      time: "",
      date: ""
    };
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ taskName: "", time: "" });
  }

  render(props) {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="taskName">Task Name: </label>
        <input type="text" name="taskName" onChange={this.handleChange} value={this.state.taskName} ></input>
        <label htmlFor="date">Completion Date: </label>
        <input type="date" name="date" onChange={this.handleChange} value={this.state.date}></input>
        <label htmlFor="time">Completion Time: </label>
        <input type="time" name="time" onChange={this.handleChange} value={this.state.time}></input>
        <input type="submit" value="Submit"></input>
        </form>
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
