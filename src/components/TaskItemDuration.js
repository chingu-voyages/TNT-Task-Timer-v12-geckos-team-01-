import React from "react";
import PropTypes from "prop-types";
import { convertSecondsToHMS } from "../util/timetools";

// this component will display the current running time of the task.
// eslint-disable-next-line no-unused-vars

const padTime = time => (time < 10 ? `0${time}` : time.toString());

const TaskItemDuration = ({ durationInSeconds }) => {
  const { hours, minutes, seconds } = convertSecondsToHMS(durationInSeconds);
  return (
    <div className="task-item-duration">
      <span className="duration">
        {padTime(hours)}:{padTime(minutes)}:{padTime(seconds)}
      </span>
    </div>
  );
};

TaskItemDuration.propTypes = {
  durationInSeconds: PropTypes.number
};

TaskItemDuration.defaultProps = {
  durationInSeconds: 0
};

export default TaskItemDuration;
