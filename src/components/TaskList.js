import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

// bootstrap imports
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

// task actions
import { removeTask } from "../actions/taskActions";

// utilities
import { convertSecondsToHMS } from "../util/timetools";

const TaskList = ({ tasks, remove }) => {
  return (
    <div>
      <ListGroup>
        {tasks.map(task => {
          const duration = convertSecondsToHMS(task.duration);

          // add leading 0 to any numbers less than 10
          const hours =
            duration.hours < 10 ? `0${duration.hours}` : duration.hours;
          const minutes =
            duration.minutes < 10 ? `0${duration.minutes}` : duration.minutes;
          const seconds =
            duration.seconds < 10 ? `0${duration.seconds}` : duration.seconds;
          const durationString = `${hours}:${minutes}:${seconds}`;

          return (
            <ListGroup.Item key={task.id}>
              <div className="task-list-item">
                <h4 className="task-list-name">{task.taskName}</h4>
                <h5 className="task-list-duration">
                  Duration: {durationString}
                </h5>
                <Button
                  className="task-list-remove-button"
                  id={task.id}
                  onClick={remove}
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

TaskList.propTypes = {
  remove: PropTypes.any.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  remove(event) {
    dispatch(removeTask(event.target.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
