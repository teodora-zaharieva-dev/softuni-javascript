function godzillaVsKong(params) {
  const [filmBudget, statistCount, clotheCost] = params.map(Number);

  const filmDecorCost = (10 / 100) * filmBudget;
  const clothesCost = statistCount * clotheCost;
  const discount = statistCount > 150 ? (10 / 100) * clothesCost : 0;
  const totalCost = filmDecorCost + clothesCost - discount;

  const neededMoney = Math.abs(filmBudget - totalCost).toFixed(2);

  if (totalCost > filmBudget) {
    const message = `Not enough money!\nWingard needs ${neededMoney} leva more.`;
    console.log(message);
  } else if (totalCost <= filmBudget) {
    const message = `Action!\nWingard starts filming with ${neededMoney} leva left.`;
    console.log(message);
  }
}

godzillaVsKong(["9587.88", "222", "55.68"]);
