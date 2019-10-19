import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

// helper function to add leading zeroes to time.
const padTime = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

const TimerDisplay = ({ text, hours, minutes, seconds, doneCallback }) => {
  return (
    <div className="timer-display">
      <div className="timer-text-container">
        <i className="material-icons">schedule</i>
        <div className="timer-text">{text}</div>
      </div>

      <div className="timer-current-time">
        <span className="timer-hours timer-time">{padTime(hours)}</span>
        <span className="timer-divider timer-time">:</span>
        <span className="timer-minutes timer-time">{padTime(minutes)}</span>
        <span className="timer-divider timer-time">:</span>
        <span className="timer-seconds timer-time">{padTime(seconds)}</span>
      </div>
      <Button
        onClick={doneCallback}
        variant="danger"
        size="lg"
        className="time-done-button"
      >
        Done
      </Button>
    </div>
  );
};

TimerDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  doneCallback: PropTypes.func.isRequired
};

TimerDisplay.defaultProps = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

export default TimerDisplay;
