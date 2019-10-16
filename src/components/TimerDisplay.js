import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const TimerDisplay = ({ text, hours, seconds, minutes, doneCallback }) => {
  return (
    <div className="timer-display">
      <span className="timer-text">{text}</span>

      <div className="timer-current-time">
        <span className="timer-hours timer-time">{hours}</span>
        <span className="timer-divider timer-time">:</span>
        <span className="timer-minutes timer-time">{minutes}</span>
        <span className="timer-divider timer-time">:</span>
        <span className="timer-seconds timer-time">{seconds}</span>
      </div>
      <Button onClick={doneCallback}>Done</Button>
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
