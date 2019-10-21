import React from "react";
import PropTypes from "prop-types";

// this component will display the current running time of the task.
// eslint-disable-next-line no-unused-vars
const TaskItemDuration = ({ task }) => {
  return <div className="task-item-duration">Duration</div>;
};

TaskItemDuration.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItemDuration;
