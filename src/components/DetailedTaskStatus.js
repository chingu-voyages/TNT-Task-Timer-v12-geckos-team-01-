import React from "react";
import PropTypes from "prop-types";

const DetailedTaskStatus = ({ task }) => {
  return <div>{task.detailedTaskTimeUnits}</div>;
};

DetailedTaskStatus.propTypes = {
  task: PropTypes.object.isRequired
};

export default DetailedTaskStatus;
