/* eslint-disable no-shadow */
import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { addTask } from "../actions/taskActions";

const CreateTaskPage = ({ addTask, nextId }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskGroup, setTaskGroup] = useState("");
  const [isDetailedTask, setIsDetailedTask] = useState(false);
  const [detailedTaskDuration, setDetailedTaskDuration] = useState(0);
  const [detailedTaskTimeUnits, setDetailedTaskTimeUnits] = useState("minutes");
  const [alertData, setAlertData] = useState({
    type: "",
    message: ""
  });

  // showAlert will display the bootstrap Alert
  // It uses the state set in alertData which is an object of type
  // {type: "bootstrap alert type", message: "Your message"}
  // the alert will be hidden after 3 seconds.
  const showAlert = () => {
    const alertTimeOut = 3000; // 3000ms = 3 seconds
    const { message, type } = alertData;

    setTimeout(() => {
      setIsAlertVisible(false);
    }, alertTimeOut);

    return (
      <Alert className="mt-2 mb-2" variant={type}>
        {message}
      </Alert>
    );
  };

  const resetForm = () => {
    setTaskName("");
    setTaskGroup("");
    setIsDetailedTask(false);
  };

  // createTask() is called when the "Create Task" button is pressed.
  // it creates the task object based on the data in the form and then
  // sends it off to Redux using addTask().

  const createTask = () => {
    if (taskName === "") {
      setAlertData({ type: "danger", message: "You must enter a task name." });
      setIsAlertVisible(true);
    } else if (
      isDetailedTask &&
      Number.parseInt(detailedTaskDuration, 10) <= 0
    ) {
      setAlertData({
        type: "danger",
        message: "A detailed task must have a duration."
      });
      setIsAlertVisible(true);
    } else {
      const task = {
        id: nextId,
        taskName,
        dateStarted: new Date(),
        running: false,
        dateCompleted: null
      };

      if (isDetailedTask) {
        task.isDetailedTask = true;
        task.detailedTaskTimeUnits = detailedTaskTimeUnits;
        task.detailedTaskDuration = detailedTaskDuration;
      }

      addTask(task);
      setAlertData({ type: "success", message: `Created task ${taskName}.` });
      setIsAlertVisible(true);
      resetForm();
    }
  };

  // detailedTaskClicked() handler for when the "Detailed Task" check box
  // is clicked.
  const detailedTaskClicked = () => {
    setIsDetailedTask(!isDetailedTask);
  };

  // timeUnitSelected() is the handler for when the time unit is selected in
  // the detailed task form. It can be hours, minutes, or days.
  const timeUnitSelected = e => {
    setDetailedTaskTimeUnits(e.target.value);
  };

  const taskDurationChanged = e => {
    const duration = Number.parseInt(e.target.value, 10);
    // make sure a number was actually entered
    if (Number.isNaN(duration)) {
      setAlertData({
        type: "danger",
        message: "You must enter a valid number"
      });
      setIsAlertVisible(true);
    } else {
      setDetailedTaskDuration(duration);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={{ span: 12 }}>
            <h1 className="display-4">Create A New Task</h1>
          </Col>
        </Row>

        <Form>
          {/* Task Name Control */}
          <Row>
            <Col xs={{ span: 12 }}>
              <Form.Group>
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a name for your task"
                  value={taskName}
                  onChange={e => setTaskName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Task Group Control */}
          <Row>
            <Col xs={{ span: 12 }}>
              <Form.Group>
                <Form.Label>Task Group</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a group for your task (optional)"
                  value={taskGroup}
                  onChange={e => setTaskGroup(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 12 }}>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Detailed Task"
                  onChange={detailedTaskClicked}
                  checked={isDetailedTask}
                />
              </Form.Group>
            </Col>
          </Row>

          {isDetailedTask && (
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Amount of time to spend on this task </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 2 }}>
                  <Form.Control
                    type="number"
                    value={detailedTaskDuration}
                    onChange={taskDurationChanged}
                  />
                </Col>
                <Col xs={{ span: 2 }}>
                  <Form.Control as="select" onChange={timeUnitSelected}>
                    <option value="minutes">Minutes</option>
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
          )}
          {/* Buttons */}
          <Row>
            <Col xs={{ span: 6 }}>
              <Button variant="primary" onClick={createTask} block>
                Create Task
              </Button>
            </Col>

            <Col xs={{ span: 6 }}>
              <Button variant="light" onClick={resetForm} block>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>

        {isAlertVisible && showAlert("danger", "Invalid task name")}
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    nextId: state.tasks.availableId
  };
};
export default connect(
  mapStateToProps,
  { addTask }
)(CreateTaskPage);

CreateTaskPage.propTypes = {
  addTask: PropTypes.func.isRequired,
  nextId: PropTypes.number.isRequired
};
