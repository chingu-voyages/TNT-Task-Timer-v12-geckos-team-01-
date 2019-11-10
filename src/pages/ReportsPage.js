import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import TaskChart from '../components/TaskChart';
import chartFormats from '../util/chartData';
import taskOperations from '../util/taskOperations';

const ReportsPage = ({ taskList }) => {
  const TotalMinutes =
    taskList.reduce((acc, task) => acc + taskOperations.totalTime(task), 0) /
    60;
  const TotalDisplay =
    TotalMinutes < 60
      ? `${TotalMinutes.toFixed(1)} minutes`
      : `${(TotalMinutes / 60).toFixed(1)} hours`;

  return (
    <>
      <h2 style={{ textAlign: 'right' }}>{TotalDisplay} tracked total</h2>
      <Card className="text-center mt-3">
        <Card.Body>
          <Card.Title>Daily Tracked Time</Card.Title>{' '}
          <TaskChart
            data={chartFormats.getDailyTotals(taskList)}
            title=""
            xKey="date"
            xTitle="date"
            yKey="minutes"
            yTitle="Minutes"
          />
        </Card.Body>
      </Card>
      <Card className="text-center  mt-3">
        <Card.Body>
          <Card.Title>Task Totals</Card.Title>
          <TaskChart
            data={chartFormats.getTaskTotals(taskList)}
            title=""
            xKey="taskName"
            xTitle="Task"
            yKey="minutes"
            yTitle="Minutes"
          />
        </Card.Body>
      </Card>
    </>
  );
};
/* make sure to add PropTypes if any */

ReportsPage.propTypes = {
  taskList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    taskList: state.tasks.taskList
  };
};
export default connect(mapStateToProps)(ReportsPage);
