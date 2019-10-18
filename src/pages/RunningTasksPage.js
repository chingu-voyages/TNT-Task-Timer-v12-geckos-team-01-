import React from "react";
import { connect } from "react-redux";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";

const RunningTasksPage = () => {
  return (
    <div>
      <h1>Running Tasks</h1>
    </div>
  );
};
/* make sure to add PropTypes if any */
const mapStateToProps = state => {
  return {
    tasks: state.tasks.taskList
  };
};
export default connect(mapStateToProps)(RunningTasksPage);
