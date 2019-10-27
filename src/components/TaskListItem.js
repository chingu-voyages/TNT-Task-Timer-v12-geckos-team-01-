import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ListGroup from "react-bootstrap/ListGroup";

import TaskItemStatus from "./TaskItemStatus";
import TaskControl from "./TaskControl";
import TaskItemDuration from "./TaskItemDuration";
// import DetailedTaskStatus from "./DetailedTaskStatus";

const TaskListItem = ({ task }) => {
  const [currentDuration, setCurrentduration] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [timerId, setTimerId] = useState(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // duration math goes here.
    if (task.running) {
      setTimerId(
        setInterval(() => {
          setCurrentduration(d => setCurrentduration(d + 1));
        }, 1000)
      );
      return () => {
        console.log("Clearing the timer");
        clearInterval(timerId); // timer cleanup
      };
    }
  }, [task]);

  return (
    <ListGroup.Item>
      <div className="task-list-item">
        <span className="task-item-name">{task.taskName}</span>

        {/* <span className="task-item-date">{task.dateStarted.toString()}</span> */}

        <TaskItemDuration durationInSeconds={currentDuration} />
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
