function petShop([dogFoodPackages, catFoodPackages]) {
  const dogFoodPrice = 2.5;
  const catFoodPrice = 4.0;
  const dogFoodPackagesCost = dogFoodPrice * Number(dogFoodPackages);
  const catFoodPackagesCost = catFoodPrice * Number(catFoodPackages);
  const totalCost = dogFoodPackagesCost + catFoodPackagesCost;
  const message = `${totalCost.toFixed(1)} lv.`;

  console.log(message);
}

petShop(["5", "4"]);
