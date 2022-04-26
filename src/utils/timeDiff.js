export const getTimeDiff = () => {
  let time = new Date().getTime();
  let startTime;
  if (!startTime) {
    startTime = time;
  }
  console.log(time)
  console.log(startTime)
  time -= startTime;
  return time;
};
