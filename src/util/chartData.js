// import zeroPad from './zeroPad';

// Task Data to Chart Data conversion functions

/*
  Properties of the task objects: (as defined in taskReducer.js)
  {
    id: Number,
    taskName: String,
    running: boolean,
    completed: boolean,
    dateStarted: Date object, // this should be called dateCreated
    timerStatusArray: [ { status: "started", when: now }, { status: "paused", when: now }, { status: "resumed", when: now },{ status: "paused", when: completionDate ],
    dateCompleted: DateObject,
    isDetailedTask: boolean,
    detailedTaskTimeUnits: String,
    detailedTaskDuration: Number
  }
*/

const chartFormats = {
  getDailyTotals: tasks => {
    const outputShape = { tasks, day: 323123, minutes: 123123 };
    return [outputShape];
  },

  getTaskTotals: tasks => {
    return [tasks];
  }
};
export default chartFormats;
// const dateToMonthSlashDay = dateString => {
//     const date = new Date(dateString);
//     return `${zeroPad(date.getMonth())}/${zeroPad(date.getDay())}`;
//   };
//   const taskTotals = tasks => tasks.reduce((acc, task) => {if (acc[task])}, {});
