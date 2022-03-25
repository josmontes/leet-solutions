/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

/**
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

/**
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

//Cases
const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const sol1 = [
  [1, 6],
  [8, 10],
  [15, 18],
];

const intervals2 = [
  [1, 4],
  [4, 5],
];
const sol2 = [[1, 5]];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let curr of intervals) {
    prev = merged[merged.length - 1];
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      merged.push(curr);
    }
  }
  return merged;
}

//Log results
console.log(merge(intervals1));
console.log(merge(intervals2));

//Time complexity is: O(n) since sort and for both have n complexity but are not nested.
//Space complexity is: O(n) since a variable size depends directly on the size of the input.
