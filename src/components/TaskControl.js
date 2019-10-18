import React from "react";
import PropTypes from "prop-types";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const TaskControl = ({ taskId }) => {
  console.log(taskId);
  return (
    <ButtonGroup className="ml-2">
      <Button variant="success" size="sm">
        <i className="material-icons">play_arrow</i>
      </Button>
      <Button variant="primary" size="sm">
        <i className="material-icons">pause</i>
      </Button>
      <Button variant="danger" size="sm">
        <i className="material-icons">stop</i>
      </Button>
    </ButtonGroup>
  );
};

TaskControl.propTypes = {
  taskId: PropTypes.number.isRequired
};

export default TaskControl;
