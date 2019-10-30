import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskChart from '../components/TaskChart';
import chartFormats from '../util/chartData';
import { getOneHourTasks } from '../util/mockTaskData';

const ReportsPage = ({ taskList }) => {
  return (
    <div>
      <h1>Viewing Reports</h1>
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
