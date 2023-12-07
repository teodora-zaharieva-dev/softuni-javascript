function sumSeconds([seconds1, seconds2, seconds3]) {
  const secondsSum = Number(seconds1) + Number(seconds2) + Number(seconds3);
  const minutes = Math.floor(secondsSum / 60);
  // const seconds = String(secondsSum % 60).padStart(2, "0");
  const seconds = String(secondsSum % 60).length === 1 ? `0${secondsSum % 60}` : secondsSum % 60;

  console.log(`${minutes}:${seconds}`);
}

sumSeconds(["35", "45", "44"]);
