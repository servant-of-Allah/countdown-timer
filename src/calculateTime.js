const totalTimeInSeconds = ((8 * 24 + 23) * 60 + 55) * 60 + 41;

let days = Math.floor(totalTimeInSeconds / 86400);
let hours = Math.floor(totalTimeInSeconds / 3600) - days * 24;
let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);

export function calculateTime(remainingTime) {
  const seconds = remainingTime % 60;

  if (seconds === 59) {
    if (minutes !== 0) {
      minutes = Math.floor((remainingTime % 3600) / 60);
    } else if (minutes === 0 && hours !== 0) {
      hours = Math.floor(remainingTime / 3600) - days * 24;
      minutes = 59;
    } else if (minutes === 0 && hours === 0 && days !== 0) {
      days = Math.floor(remainingTime / 86400);
      hours = 23;
      minutes = 59;
    }
  }

  return { days, hours, minutes, seconds };
}
