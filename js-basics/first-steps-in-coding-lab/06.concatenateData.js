function concatenateData([firstName, lastName, age, town]) {
  const result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;

  console.log(result);
}

concatenateData(["Luna", "LoveGood", "0,2", "Plovdiv"]);
