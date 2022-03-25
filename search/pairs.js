/**
Given an array of integers and a target value, 
determine the number of pairs of array elements that have a difference equal to the target value.
 */

/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k, arr) {
  //Brute force or set
  let count = 0;
  let targets = new Set(arr);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i] + k;
    if (targets.has(target)) count++;
  }
  return count;
}
