import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { calcTotalDuration, convertSecondsToHMS } from "../util/timetools";

const padTime = t => (t < 10 ? `0${t}` : `${t}`);

const TaskDetails = ({ task, dismiss }) => {
  const { timerStatusArray } = task;
  const duration = convertSecondsToHMS(calcTotalDuration(timerStatusArray));
  const durationString = `${padTime(duration.hours)}:${padTime(
    duration.minutes
  )}:${padTime(duration.seconds)}`;
  const taskData = timerStatusArray.map(t => {
    const status =
      t.status === "started" ? (
        <span className="text-success">Started</span>
      ) : (
        <span className="text-danger">Paused</span>
      );

    return (
      <tr>
        <td>{moment(t.when).calendar()}</td>
        <td>{status}</td>
      </tr>
    );
  });

  // check if the task has been started yet
  const isStarted = !(task.timerStatusArray.length === 0);

  return (
    <div className="task-details-dialog">
      <h2 className="task-details-title">{task.taskName}</h2>
      <div className="task-details-table-container">
        <Table responsive striped bordered className="task-details-table">
          <thead>
            <tr>
              <td>When</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{taskData}</tbody>
        </Table>
      </div>
      {!isStarted ? (
        <h2>This task has not been started yet</h2>
      ) : (
        <h2>Total Time: {durationString}</h2>
      )}
      {task.completed && <h2>This task was completed.</h2>}
      <Button variant="outline-primary" size="lg" onClick={() => dismiss()}>
        Close
      </Button>
    </div>
  );
};

TaskDetails.propTypes = {
  task: PropTypes.object.isRequired,
  dismiss: PropTypes.func.isRequired
};

export default TaskDetails;
