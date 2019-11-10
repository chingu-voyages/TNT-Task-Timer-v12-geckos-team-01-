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

const taskOperations = {
  // Does not include currently running session time
  totalTimeByDay: task => {
    const days = {};
    const statusArray = task.timerStatusArray;

    // start on the second element, first 'pause' status.
    for (let i = 1; i < statusArray.length; i += 2) {
      // TODO: add status validation and throw error if invalid
      const startDate = new Date(statusArray[i - 1].when);
      const startDateString = startDate.toLocaleDateString();

      const stopDate = new Date(statusArray[i].when);
      const stopDateString = stopDate.toLocaleDateString();
      if (startDateString === stopDateString) {
        // Task session runs for only one day
        const time = (stopDate.getTime() - startDate.getTime()) / 1000;
        days[startDateString] = time + (days[startDateString] || 0);
      } else {
        // Task session runs between 2 or more days.

        // Add start till midnight time.
        const startMidnight = new Date(startDate.valueOf());
        startMidnight.setHours(24, 0, 0, 0);

        const startTimeTillMidnight =
          (startMidnight.getTime() - startDate.getTime()) / 1000;

        days[startDateString] =
          startTimeTillMidnight + (days[startDateString] || 0);

        // add stop after midnight time
        const stopMidnight = new Date(stopDate.valueOf());
        stopMidnight.setHours(0, 0, 0, 0);

        const stopTimeAfterMidnight =
          (stopDate.getTime() - stopMidnight.getTime()) / 1000;

        days[stopDateString] =
          stopTimeAfterMidnight + (days[stopDateString] || 0);

        // Check for potential full 24hour days in between
        while (startMidnight.getTime() < stopMidnight.getTime()) {
          // Add 24hr day
          days[startMidnight.toLocaleDateString()] =
            24 * 60 * 60 + (days[startMidnight.toLocaleDateString()] || 0);
          // Increment day
          startMidnight.setHours(24);
        }
      }
    }

    return days;
  },
  totalTime: task => {
    let time = 0;
    const statusArray = task.timerStatusArray;

    // start on the second element, first 'pause' status.
    for (let i = 1; i < statusArray.length; i += 2) {
      // TODO: add status validation and throw error if invalid
      const startMS = new Date(statusArray[i - 1].when).getTime();
      const stopMS = new Date(statusArray[i].when).getTime();
      time += (stopMS - startMS) / 1000;
    }
    return time;
  }
};

export default taskOperations;
