function inchesToCentimeters([inches]) {
  const inchesToCentimetersRatio = 2.54;
  const centimeters = Number(inches) * inchesToCentimetersRatio;

  console.log(centimeters);
}

inchesToCentimeters(["5"]);
