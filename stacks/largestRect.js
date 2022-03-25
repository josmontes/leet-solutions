/**
Skyline Real Estate Developers is planning to demolish a number of old, 
unoccupied buildings and construct a shopping mall in their place. 
Your task is to find the largest solid area in which the mall can be constructed.

There are a number of buildings in a certain two-dimensional landscape. 
Each building has a height, given by h[i]. 
If you join k adjacent buildings, they will form a solid rectangle of area k* min(h[i]...h[i + k - 1]).
 */

/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */
function largestRectangle(h) {
  let maxArea = h.length;
  h.forEach((value, index) => {
    let i = index + 1;
    let j = index - 1;
    let tempArea = value;
    while (i < h.length && h[i] >= value) {
      tempArea += value;
      i++;
    }
    while (j >= 0 && h[j] >= value) {
      tempArea += value;
      j--;
    }
    maxArea = Math.max(tempArea, maxArea);
  });
  return maxArea;
}
