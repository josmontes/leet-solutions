/**
Alice is a kindergarten teacher. She wants to give some candies to the children in her class.  
All the children sit in a line and each of them has a rating score according to his or her performance in the class.  
Alice wants to give at least 1 candy to each child. 
If two children sit next to each other, then the one with the higher rating must get more candies.
Alice wants to minimize the total number of candies she must buy.
 */

/*
 * Complete the 'candies' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */
function candies(n, arr) {
  let candies = Array(n).fill(1);
  //Edge cases
  if (arr[0] > arr[1]) candies[0]++;
  if (arr[n - 1] > arr[n - 2]) candies[n - 1]++;
  //From left to right to get up trend
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) candies[i] = candies[i - 1] + 1;
  }
  //From right to left in case of inversed trend
  for (let j = n - 2; j >= 0; j--) {
    if (arr[j] > arr[j + 1] && candies[j] <= candies[j + 1])
      candies[j] = candies[j + 1] + 1;
  }
  return candies.reduce((a, b) => a + b, 0);
}
