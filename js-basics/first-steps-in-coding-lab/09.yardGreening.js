function yardGreening([squareMeters]) {
  const pricePerScareMeter = 7.61;
  const discount = 0.18;
  const priceForYard = Number(squareMeters) * pricePerScareMeter;
  const discountPriceForYard = discount * priceForYard;
  const finalPrice = priceForYard - discountPriceForYard;

  const result = `The final price is: ${finalPrice} lv.\nThe discount is: ${discountPriceForYard} lv.`;

  console.log(result);
}

yardGreening(["550"]);
