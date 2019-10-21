import React from "react";
import { PropTypes } from "prop-types";

// bootstrap imports
import ListGroup from "react-bootstrap/ListGroup";

import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <h2>You have not created any tasks yet.</h2>;
  }
  return (
    <div className="task-list-container">
      <ListGroup>
        {tasks.map(task => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ListGroup>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;
