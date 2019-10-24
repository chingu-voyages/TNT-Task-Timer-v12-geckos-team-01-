import React from "react";
import { PropTypes } from "prop-types";

// bootstrap imports
import ListGroup from "react-bootstrap/ListGroup";

import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, title }) => {
  return (
    <div className="task-list-container">
      <h2 className="task-list-title">{title}</h2>
      <div className="task-list">
        {tasks.length === 0 ? (
          <h2>No tasks to display.</h2>
        ) : (
          <ListGroup>
            {tasks.map(task => (
              <TaskListItem key={task.id} task={task} />
            ))}
          </ListGroup>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  title: PropTypes.string
};

TaskList.defaultProps = {
  title: "Tasks"
};

export default TaskList;
