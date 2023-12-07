function worldSwimmingRecord(params) {
  const [swimmingRecord, distance, oneMeterSwimmingSeconds] = params.map(Number);

  const swimmingTime = distance * oneMeterSwimmingSeconds;
  const waterResistance = Math.floor(distance / 15) * 12.5;
  const totalSwimmingTime = swimmingTime + waterResistance;

  if (totalSwimmingTime < swimmingRecord) {
    const message = `Yes, he succeeded! The new world record is ${totalSwimmingTime.toFixed(2)} seconds.`;
    console.log(message);
  } else {
    const timeDifference = Math.abs(swimmingRecord - totalSwimmingTime).toFixed(2);
    const message = `No, he failed! He was ${timeDifference} seconds slower.`;
    console.log(message);
  }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);
