import React, { useState } from "react";
import { PropTypes } from "prop-types";

// bootstrap imports
import ListGroup from "react-bootstrap/ListGroup";

import TaskListItem from "./TaskListItem";
import TaskDetails from "./TaskDetails";

const TaskList = ({ tasks, title }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [taskToShow, setTaskToShow] = useState(null);

  const dismissDetails = () => setIsDetailsShown(false);

  const taskItemClicked = task => {
    if (!isDetailsShown) {
      setIsDetailsShown(true);
      setTaskToShow(task);
    }
  };

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">{title}</h2>
      <div className="task-list">
        {tasks.length === 0 ? (
          <h2>No tasks to display.</h2>
        ) : (
          <ListGroup>
            {tasks.map(task => (
              <ListGroup.Item key={task.id}>
                <TaskListItem task={task} showDetails={taskItemClicked} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>

      {isDetailsShown && (
        <TaskDetails task={taskToShow} dismiss={dismissDetails} />
      )}
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
