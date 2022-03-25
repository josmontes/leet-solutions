/**
You will be given a list of integers, arr, and a single integer k. 
You must create an array of length k from elements of arr such that its unfairness is minimized. 
Call that array arr'. Unfairness of an array is calculated as
                    max(arr') - min(arr')
Where:
- max denotes the largest integer in arr'.
- min denotes the smallest integer in arr'.
 */

/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
  //Brute force
  arr.sort((a, b) => a - b);
  let minUnfair = null;
  for (let i = 0; i <= arr.length - k; i++) {
    let localUnfair = arr[i + k - 1] - arr[i];
    if (!minUnfair) minUnfair = localUnfair;
    else if (minUnfair > localUnfair) minUnfair = localUnfair;
  }
  return minUnfair;
}
