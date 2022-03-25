/**
In an array, arr, the elements at indices i and j (where i < j) form an inversion if arr[i] > arr[j]. 
In other words, inverted elements arr[i] and arr[j] are considered to be "out of order". 
To correct an inversion, we can swap adjacent elements.
 */

/*
 * Complete the 'countInversions' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countInversions(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      swaps++;
      j--;
    }
  }
  return swaps;
}
