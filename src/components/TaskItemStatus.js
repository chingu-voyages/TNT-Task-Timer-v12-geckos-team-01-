import React from "react";
import PropTypes from "prop-types";

const TaskItemStatus = ({ running }) => {
  return <h3>{running ? "Running" : "Not Running"}</h3>;
};

TaskItemStatus.propTypes = {
  running: PropTypes.bool.isRequired
};

export default TaskItemStatus;
