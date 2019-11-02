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

    // if the length of the timerStatusArray is 1 then the task has just
    // started and there is no ending entry yet. So find the difference
    // between the starting time and now (now is used as the ending time).
    // This will happen if the page is navigated away from while the timer
    // is still running.

    if (timerStatusArray.length === 1) {
      const now = moment();
      const start = moment(timerStatusArray[0].when);
      const diff = now.diff(start, "seconds");
      duration = diff;
    } else {
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
      if (next && next.status === "started") {
        const now = moment(new Date());
        duration += now.diff(moment(current.when), "seconds");
      }
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

  // eslint-disable-next-line consistent-return
  useEffect(() => {
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
