/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import {
  startTask,
  pauseTask,
  removeTask,
  completeTask
} from "../actions/taskActions";

const TaskControl = ({
  taskId,
  startTask,
  pauseTask,
  removeTask,
  completeTask
}) => {
  const startTaskClicked = () => startTask(taskId);
  const pauseTaskClicked = () => pauseTask(taskId);
  const completeTaskClicked = () => completeTask(taskId);
  const deleteTaskClicked = () => removeTask(taskId);

  return (
    <div className="task-list-item-control">
      <ButtonToolbar>
        <DropdownButton size="sm" className="ml-auto" title="Task Actions">
          <Dropdown.Item onClick={startTaskClicked}>Start task</Dropdown.Item>
          <Dropdown.Item onClick={pauseTaskClicked}>Pause task</Dropdown.Item>
          <Dropdown.Item onClick={completeTaskClicked}>
            Mark task completed
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={deleteTaskClicked}>Delete task</Dropdown.Item>
        </DropdownButton>
      </ButtonToolbar>
    </div>
  );
};

TaskControl.propTypes = {
  taskId: PropTypes.number.isRequired,
  startTask: PropTypes.func.isRequired,
  pauseTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { startTask, pauseTask, removeTask, completeTask }
)(TaskControl);
