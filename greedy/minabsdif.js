/**
The absolute difference is the positive difference between two values a and b, is written |a - b| or |b - a| and they are equal. 
Given an array of integers, find the minimum absolute difference between any two elements in the array.
 */

function minimumAbsoluteDifference(arr) {
  //Sort abs array
  arr.sort((a,b) => Math.abs(a) - Math.abs(b));
  //Initialize min dif
  let minDiff = Math.abs(arr[1] - arr[0]);
  for (let i = 2; i < arr.length; i++) {
      let localDiff = Math.abs(arr[i] - arr[i-1]);
      if ( localDiff < minDiff) minDiff = localDiff;
  }
  return minDiff;
}
