import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

// bootstrap imports
import ListGroup from 'react-bootstrap/ListGroup';

// task actions
import { removeTask } from '../actions/taskActions';

// utilities
import { convertSecondsToHMS } from '../util/timetools';
import zeroPad from '../util/zeroPad';

const dateToMonthDay = dateString => {
  const date = new Date(dateString);
  return `${zeroPad(date.getMonth())}/${zeroPad(date.getDay())}`;
};
const taskToChartData = ({ taskName, date, duration }) => ({
  name: dateToMonthDay(date),
  [taskName]: duration
});

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];
const TaskChart = ({ tasks }) => {
  const allTaskNamesWithColor = tasks.reduce((acc, cur) => {
    if (!acc[cur.taskName]) {
      acc[cur.taskName] = cur.color;
    }

    return acc;
  }, {});

  // const stackedBarData = tasks.map(taskToChartData);
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={tasks.map(taskToChartData)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(allTaskNamesWithColor).map(taskName => (
          <Bar
            dataKey={taskName}
            stackId="a"
            fill={allTaskNamesWithColor[taskName]}
          />
        ))}
      </BarChart>
      <ListGroup>
        {tasks.map(task => {
          const duration = convertSecondsToHMS(task.duration);

          // add leading 0 to any numbers less than 10
          const { hours, minutes, seconds } = duration;
          const durationString = `${zeroPad(hours)}:${zeroPad(
            minutes
          )}:${zeroPad(seconds)}`;

          return (
            <ListGroup.Item key={task.id}>
              <div className="task-list-item">
                <h4 className="task-list-name">{task.taskName}</h4>
                <h5 className="task-list-duration">
                  Duration: {durationString}
                </h5>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

TaskChart.propTypes = {
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
)(TaskChart);
