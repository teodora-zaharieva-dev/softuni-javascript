function toyShop(params) {
  const [excursionCost, puzzleCount, speakingDollsCount, teddyBearCount, minionsCount, truckCount] = params.map(Number);
  const puzzleCost = puzzleCount * 2.6;
  const speakingDollsCost = speakingDollsCount * 3;
  const teddyBearCost = teddyBearCount * 4.1;
  const minionsCost = minionsCount * 8.2;
  const truckCost = truckCount * 2;
  const toysCost = puzzleCost + speakingDollsCost + teddyBearCost + minionsCost + truckCost;
  const toysCount = puzzleCount + speakingDollsCount + teddyBearCount + minionsCount + truckCount;
  const discount = toysCount >= 50 ? (25 / 100) * toysCost : 0;
  const rentCost = (10 / 100) * (toysCost - discount);
  const moneyLeft = toysCost - discount - rentCost;
  const moneyNeededForExcursion = Math.abs(moneyLeft - excursionCost).toFixed(2);

  if (moneyLeft >= excursionCost) {
    const message = `Yes! ${moneyNeededForExcursion} lv left.`;
    console.log(message);
  } else {
    const message = `Not enough money! ${moneyNeededForExcursion} lv needed.`;
    console.log(message);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
