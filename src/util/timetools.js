import moment from "moment";

export function convertSecondsToHMS(totalSeconds) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  // get the number of total minutes
  minutes = Math.floor(totalSeconds / 60);

  // number of left over seconds
  seconds = totalSeconds % 60;

  // get the number of hours (if any)
  hours = Math.floor(minutes / 60);
  minutes %= 60; // left over minutes

  return {
    hours,
    minutes,
    seconds
  };
}

// calculate the total number of seconds a timer has been running by
// calculating the difference between a timer start and a timer pause.
// Then just add up the differences.
export const calcTotalDuration = timerStatusArray => {
  let duration = 0;

  if (timerStatusArray.length !== 0) {
    let next = null;

    // if the length of the timerStatusArray is 1 then the task has just
    // started and there is no ending entry yet. So find the difference
    // between the starting time and now (now is used as the ending time).
    // This will happen if the page is navigated away from while the timer
    // is still running.

    if (timerStatusArray.length === 1) {
      const now = moment();
      const start = moment(timerStatusArray[0].when);
      const diff = now.diff(start, "seconds");
      duration = diff;
    } else {
      let current = timerStatusArray[0];

      for (let i = 1; i < timerStatusArray.length; i += 1) {
        next = timerStatusArray[i];
        if (next.status === "paused") {
          // the timer is paused.
          // find the difference between current and next
          const currentMoment = moment(current.when);
          const nextMoment = moment(next.when);
          const diff = nextMoment.diff(currentMoment, "seconds");
          duration += diff;
        } else {
          current = next;
        }
      }

      // check if the timer is still running and add in the current number
      // of seconds until now.
      if (next && next.status === "started") {
        const now = moment(new Date());
        duration += now.diff(moment(current.when), "seconds");
      }
    }
  }
  return duration;
};
