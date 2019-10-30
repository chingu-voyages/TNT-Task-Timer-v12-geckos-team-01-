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
