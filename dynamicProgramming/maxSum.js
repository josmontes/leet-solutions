/**
Given an array of integers, find the subset of non-adjacent elements with the maximum sum. 
Calculate the sum of that subset. 
It is possible that the maximum sum is 0, the case when all elements are negative.
 */

function maxSubsetSum(arr) {
  //Initialize max arr
  let max = Array(arr.length);
  //Edge cases
  max[0] = arr[0];
  max[1] = Math.max(arr[1], arr[0]);
  for (let i = 2; i < arr.length; i++) {
    //Max between last max, currVal, currVal + max of the last non adjacent index
    max[i] = Math.max(max[i - 1], arr[i], arr[i] + max[i - 2]);
  }
  //Return last max calculated
  return max[arr.length - 1];
}
