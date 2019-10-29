import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ListGroup from "react-bootstrap/ListGroup";
import moment from "moment";

import TaskItemStatus from "./TaskItemStatus";
import TaskControl from "./TaskControl";
import TaskItemDuration from "./TaskItemDuration";
// import DetailedTaskStatus from "./DetailedTaskStatus";

// calculate the total number of seconds a timer has been running by
// calculating the difference between a timer start and a timer pause.
// Then just add up the differences.
const calcTotalDuration = timerStatusArray => {
  let duration = 0;

  if (timerStatusArray.length !== 0) {
    let next = null;

    let current = timerStatusArray[0];

    for (let i = 1; i < timerStatusArray.length; i += 1) {
      next = timerStatusArray[i];
      if (next.status === "paused") {
        // the timer is paused.
        // find the difference between current and next
        const currentMoment = moment(current.when);
        const nextMoment = moment(next.when);
        const diff = nextMoment.diff(currentMoment, "seconds");
        duration += diff;
      } else {
        current = next;
      }
    }

    // check if the timer is still running and add in the current number
    // of seconds until now.
    if (next.status === "started") {
      const now = moment(new Date());
      duration += now.diff(moment(current.when), "seconds");
    }
  }
  return duration;
};

const TaskListItem = ({ task }) => {
  const [currentDuration, setCurrentduration] = useState(0);
  const [timerId, setTimerId] = useState(null);

  // duration math goes here. Add up all the starts and stops and convert to
  // seconds.

  // if timerStatusArray is empty then the timer has not been started yet
  useEffect(() => {
    const duration = calcTotalDuration(task.timerStatusArray);
    setCurrentduration(duration);
    // }
  }, []);

  // timer is adding the amount of time that the timer is running when the
  // timer is paused, but only when displaying it - the state appears correct.

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (task.running) {
      setTimerId(
        setInterval(() => {
          setCurrentduration(d => setCurrentduration(d + 1)); // bug here somewheres?
        }, 1000)
      );
      return () => {
        console.log("Clearing the timer");
        clearInterval(timerId); // timer cleanup
      };
    }
  }, []);

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
