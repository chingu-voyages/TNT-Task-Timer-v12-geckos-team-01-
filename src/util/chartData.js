import taskOperations from './taskOperations';
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
    const totalTaskDaysTimeObj = tasks.reduce((acc, task) => {
      const days = taskOperations.totalTimeByDay(task);
      Object.keys(days).forEach(date => {
        acc[date] = days[date] + (acc[date] || 0);
      });
      return acc;
    }, {});

    const TotalTaskDaysArray = Object.keys(totalTaskDaysTimeObj)
      .map(date => ({
        date,
        seconds: totalTaskDaysTimeObj[date]
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    return TotalTaskDaysArray;
  },

  getTaskTotals: tasks => {
    return tasks
      ? tasks.map(task => ({
          taskName: task.taskName,
          seconds: taskOperations.totalTime(task)
        }))
      : [];
  }
};
export default chartFormats;
// const dateToMonthSlashDay = dateString => {
//     const date = new Date(dateString);
//     return `${zeroPad(date.getMonth())}/${zeroPad(date.getDay())}`;
//   };
//   const taskTotals = tasks => tasks.reduce((acc, task) => {if (acc[task])}, {});
