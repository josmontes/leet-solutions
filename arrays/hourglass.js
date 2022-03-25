/**
 * Given a 6x6 2D Array, arr:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
a b c
  d
e f g
There are 16 hourglasses in arr. 
An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
The array will always be 6x6
 */

function hourglassSum(arr) {
  //Initialize max to any value les than 9*7=49
  let max = -50;
  //From second to penultimate
  //index 1 to index 4 since last index is always 5
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      let hourglass =
        arr[i - 1][j - 1] +
        arr[i - 1][j + 1] +
        arr[i - 1][j] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j + 1] +
        arr[i + 1][j];
      max = Math.max(max, hourglass);
    }
  }
  return max;
}
