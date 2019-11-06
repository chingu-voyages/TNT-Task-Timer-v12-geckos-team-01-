/* eslint-disable no-shadow */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { deleteAllTasks } from "../actions/taskActions";

const SettingsPage = ({ deleteAllTasks }) => {
  const [redirect, setRedirect] = useState(false);

  const deleteClicked = () => {
    deleteAllTasks();
    setRedirect(true);
  };

  return (
    <Container>
      <div className="page-header">
        <h2 className="display-3">Settings</h2>
      </div>

      {redirect ? (
        <Redirect to="/mytasks" />
      ) : (
        <Row>
          <Col span={{ xs: 12 }}>
            <Alert variant="danger">
              <Alert.Heading>Delete All Tasks?</Alert.Heading>
              <p>This cannot be undone.</p>
              <Button variant="danger" onClick={deleteClicked}>
                Delete All Tasks
              </Button>
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

SettingsPage.propTypes = {
  deleteAllTasks: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteAllTasks }
)(SettingsPage);
