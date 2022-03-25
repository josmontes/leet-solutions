/**
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm. 
Once sorted, print the following three lines:
Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
First Element: firstElement, where firstElement is the first element in the sorted array.
Last Element: lastElement, where lastElement is the last element in the sorted array.
 */

function countSwaps(a) {
  let n = a.length;
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swaps++;
      }
    }
  }
  console.log("Array is sorted in", swaps, "swaps.");
  console.log("First Element:", a[0]);
  console.log("Last Element:", a[a.length - 1]);
  return;
}
