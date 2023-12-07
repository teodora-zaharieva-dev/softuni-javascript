function timePlus15Minutes([hours, minutes]) {
  const minutesPlus15Minutes = Number(minutes) + 15;
  let h = Number(hours);

  if (minutesPlus15Minutes >= 60) {
    h = Number(hours) + 1;
  }

  if (h === 24) {
    h = 0;
  }

  const totalMinutes = String(minutesPlus15Minutes % 60).padStart(2, "0");
  console.log(`${h}:${totalMinutes}`);
}

timePlus15Minutes(["11", "08"]);
