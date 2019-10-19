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

export function shutupLint() {
  // linter complains about using default if only one export
  return null;
}
