import React from 'react';
import { PropTypes } from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Bar
} from 'recharts';

const TaskChart = ({ data, title, xKey, xTitle, yKey, yTitle }) => {
  return (
    <div>
      {/* TODO: get rechart title label to work and remove h2 element */}
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 50
          }}
        >
          <XAxis dataKey={xKey}>
            <Label value={xTitle} offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{ value: yTitle, angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Bar dataKey={yKey} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

TaskChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  xKey: PropTypes.string.isRequired,
  xTitle: PropTypes.string.isRequired,
  yKey: PropTypes.string.isRequired,
  yTitle: PropTypes.string.isRequired
};

export default TaskChart;
