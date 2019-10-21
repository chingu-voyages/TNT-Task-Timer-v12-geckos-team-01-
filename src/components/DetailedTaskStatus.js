import React from "react";
import PropTypes from "prop-types";

// this component will display the details of the
// detailed tasks - the progress towards the goal, etc.
const DetailedTaskStatus = ({ task }) => {
  return <div>{task.detailedTaskTimeUnits}</div>;
};

DetailedTaskStatus.propTypes = {
  task: PropTypes.object.isRequired
};

export default DetailedTaskStatus;
