function lunchBreak([seriesName, episodeLength, durationOfTheBreak]) {
  const lunchTime = (1 / 8) * Number(durationOfTheBreak);
  const timeToRelax = (1 / 4) * Number(durationOfTheBreak);
  const leftTime = Number(durationOfTheBreak) - (lunchTime + timeToRelax);
  const time = Math.ceil(Math.abs(Number(episodeLength) - leftTime));

  if (leftTime >= episodeLength) {
    const message = `You have enough time to watch ${seriesName} and left with ${time} minutes free time.`;
    console.log(message);
  } else {
    const message = `You don't have enough time to watch ${seriesName}, you need ${time} more minutes.`;
    console.log(message);
  }
}

lunchBreak(["Game of Thrones", "60", "96"]);
