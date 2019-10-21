import React from "react";
import PropTypes from "prop-types";

import ListGroup from "react-bootstrap/ListGroup";

import TaskItemStatus from "./TaskItemStatus";
import TaskControl from "./TaskControl";
import TaskItemDuration from "./TaskItemDuration";
// import DetailedTaskStatus from "./DetailedTaskStatus";

const TaskListItem = ({ task }) => {
  return (
    <ListGroup.Item>
      <div className="task-list-item">
        <span className="task-item-name">{task.taskName}</span>

        {/* <span className="task-item-date">{task.dateStarted.toString()}</span> */}

        <TaskItemDuration task={task} />
        <TaskItemStatus running={task.running} completed={task.completed} />

        <TaskControl taskId={task.id} />

        {/* {task.isDetailedTask && <DetailedTaskStatus task={task} />} */}
      </div>
    </ListGroup.Item>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskListItem;
