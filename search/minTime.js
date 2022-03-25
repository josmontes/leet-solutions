/**
You are planning production for an order. 
You have a number of machines that each have a fixed number of days to produce an item. 
Given that all the machines operate simultaneously, determine the minimum number of days to produce the required order.
 */

function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    // check if number is a factor
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function minTime(machines, goal) {
  machines.sort((a, b) => a - b);
  let maxDays = Math.ceil(
    (goal * machines[machines.length - 1]) / machines.length
  );
  let minDays = Math.ceil((goal * machines[0]) / machines.length);
  while (minDays < maxDays) {
    let days = Math.floor((maxDays + minDays) / 2);
    let dayCount = 0;
    for (const mac of machines) dayCount += Math.floor(days / mac);
    if (dayCount >= goal) maxDays = days;
    else minDays = days + 1;
  }
  return minDays;
}
