/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import TaskItemStatus from "./TaskItemStatus";
import TaskControl from "./TaskControl";
import TaskItemDuration from "./TaskItemDuration";
import { calcTotalDuration } from "../util/timetools";

const TaskListItem = ({ task, showDetails }) => {
  const [currentDuration, setCurrentduration] = useState(0);
  const [timerId, setTimerId] = useState(null);

  // if timerStatusArray is empty then the timer has not been started yet
  useEffect(() => {
    const duration = calcTotalDuration(task.timerStatusArray);
    setCurrentduration(duration);
    // }
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (task.running) {
      setTimerId(
        setInterval(() => {
          setCurrentduration(d => setCurrentduration(d + 1));
        }, 1000)
      );
      return () => {
        clearInterval(timerId); // timer cleanup
      };
    }
  }, []);

  return (
    <div className="task-list-item">
      <span
        className="task-item-name text-truncate"
        onClick={() => showDetails(task)}
      >
        {task.taskName}
      </span>

      <TaskItemDuration durationInSeconds={currentDuration} />
      <TaskItemStatus running={task.running} completed={task.completed} />

      <TaskControl taskId={task.id} />
    </div>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  showDetails: PropTypes.func.isRequired
};

export default TaskListItem;
