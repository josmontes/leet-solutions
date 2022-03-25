/**
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements.
Find the minimum number of swaps required to sort the array in ascending order.
 */

function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      let corrInd = arr[i] - 1;
      let temp = arr[corrInd];
      arr[corrInd] = arr[i];
      arr[i] = temp;
      swaps++;
    }
  }
  return swaps;
}
