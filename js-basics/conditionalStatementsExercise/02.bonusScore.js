function bonusScore([number]) {
  let bonusScore = 0;

  if (Number(number) <= 100) {
    bonusScore = 5;
  } else if (Number(number) > 100 && Number(number) <= 1000) {
    bonusScore = (20 / 100) * Number(number);
  } else if (Number(number) > 1000) {
    bonusScore = (10 / 100) * Number(number);
  }

  if (Number(number) % 2 === 0) {
    bonusScore += 1;
  } else if (Number(number) % 10 === 5) {
    bonusScore += 2;
  }

  const numberAndBonusSum = Number(number) + bonusScore;
  console.log(bonusScore);
  console.log(numberAndBonusSum);
}

bonusScore(["2703"]);
