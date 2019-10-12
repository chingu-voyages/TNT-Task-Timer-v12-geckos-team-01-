import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux'
import { addTask } from '../store'

class NewTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName : "",
      time: "",
      date: ""
    };
    this.add = props.add;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.add(this.state);
    this.setState({ taskName: "", time: "", date: ""});
  };

  render() {
    const {taskName, date, time} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        <label htmlFor="taskName">Task Name: <input type="text" name="taskName" onChange={this.handleChange} value={taskName}  />
        </label>

        <label htmlFor="date">Completion Date:
        <input type="date" name="date" onChange={this.handleChange} value={date} />
        </label>

        <label htmlFor="time">Completion Time:
        <input type="time" name="time" onChange={this.handleChange} value={time} />
        </label>

        <Button type="submit">Submit</Button>

        </form>
      </div>
    )
  };
};

NewTask.propTypes = {
  add: PropTypes.any.isRequired
};

function mapDispatchToProps(dispatch){
  return {
    add(task) {
      dispatch(addTask(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewTask)
