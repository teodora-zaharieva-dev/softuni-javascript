function shopping(params) {
  const [budget, videoCardsCount, processorsCount, ramMemoryCount] = params.map(Number);

  const VIDEO_CARD_PRICE = 250;
  const videoCardsCost = videoCardsCount * VIDEO_CARD_PRICE;
  const processorsCost = (35 / 100) * videoCardsCost * processorsCount;
  const ramMemoryCost = (10 / 100) * videoCardsCost * ramMemoryCount;

  const totalCost = videoCardsCost + processorsCost + ramMemoryCost;
  const discount = (15 / 100) * totalCost;
  const finalCost = videoCardsCount > processorsCount ? totalCost - discount : totalCost;

  const residualBudget = Math.abs(finalCost - budget).toFixed(2);

  if (totalCost <= budget) {
    const message = `You have ${residualBudget} leva left!`;
    console.log(message);
  } else {
    const message = `Not enough money! You need ${residualBudget} leva more!`;
    console.log(message);
  }
}

shopping(["920.45", "3", "1", "1"]);
