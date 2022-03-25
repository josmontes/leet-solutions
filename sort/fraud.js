/**
HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. 
If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending 
for a trailing number of days, they send the client a notification about potential fraud. 
The bank doesn't send the client any notifications until they have 
at least that trailing number of prior days' transaction data.

Given the number of trailing days d and a client's total daily expenditures for a period of n days, 
determine the number of times the client will receive a notification over all n days.
 */

function getMedian(d, cs) {
  if (d % 2 === 0) {
    let m1, m2;
    for (let j = 0, k = 0; k <= Math.floor((d - 1) / 2); k += cs[j], j++)
      m1 = j;
    for (let j = 0, k = 0; k <= Math.ceil((d - 1) / 2); k += cs[j], j++) m2 = j;
    return (m1 + m2) / 2;
  } else {
    let m;
    for (let j = 0, k = 0; k <= (d - 1) / 2; k += cs[j], j++) m = j;
    return m;
  }
}

/*
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */
function activityNotifications(expenditure, d) {
  let notifs = 0;
  let countSort = Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) countSort[expenditure[i]]++; //Initialize countSort to last days
  for (let i = d, l = expenditure.length; i < l; i++) {
    if (expenditure[i] >= 2 * getMedian(d, countSort)) notifs++;
    countSort[expenditure[i - d]]--;
    countSort[expenditure[i]]++;
  }
  return notifs;
}
