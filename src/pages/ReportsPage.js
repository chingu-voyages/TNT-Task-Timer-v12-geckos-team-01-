import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskChart from '../components/TaskChart';
import chartFormats from '../util/chartData';
import taskOperations from '../util/taskOperations';
import { getOneHourTasks } from '../util/mockTaskData';

const ReportsPage = ({ taskList }) => {
  const TotalMinutes =
    taskList.reduce((acc, task) => acc + taskOperations.totalTime(task), 0) /
    60;
  const TotalDisplay =
    TotalMinutes < 60
      ? `${TotalMinutes.toFixed(1)} minutes`
      : `${(TotalMinutes / 60).toFixed(1)} hours`;
  return (
    <div>
      <h2 style={{ textAlign: 'right' }}>{TotalDisplay} tracked total</h2>
      <TaskChart
        data={chartFormats.getTaskTotals(taskList)}
        title="Total Task Time"
        xKey="taskName"
        xTitle="Task Name"
        yKey="seconds"
        yTitle="Time [seconds]"
      />
      <TaskChart
        data={chartFormats.getTaskTotals(getOneHourTasks())}
        title="Mock Data Total Task Time"
        xKey="taskName"
        xTitle="Task Name"
        yKey="seconds"
        yTitle="Time [seconds]"
      />
    </div>
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
