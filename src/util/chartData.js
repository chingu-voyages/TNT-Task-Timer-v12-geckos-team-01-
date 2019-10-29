// import zeroPad from './zeroPad';

// Task Data to Chart Data conversion functions

const chartFormats = {
  getDailyTotals: tasks => {
    return [tasks];
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

//   const mockData = [
//     {
//       taskName: 'Eating Lunch',
//       date: '2019-10-24T00:30:07.411Z',
//       duration: 1001
//     },
//     {
//       taskName: 'Reading book',
//       date: '2019-10-24T00:30:07.411Z',
//       duration: 2001
//     },
//     {
//       taskName: 'Coding',
//       date: '2019-10-25T00:30:07.411Z',
//       duration: 501
//     },
//     {
//       taskName: 'Dinner',
//       date: '2019-10-26T00:30:07.411Z',
//       duration: 750
//     },
//     { taskName: 'working', date: '2019-10-26T00:30:07.411Z', duration: 3001 }
//   ];
