/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not
 * have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 */

/**
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

//Cases
const intervals1 = [
  [1, 3],
  [6, 9],
];
const newInterval1 = [2, 5];
const sol1 = [
  [1, 5],
  [6, 9],
];

const intervals2 = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval2 = [4, 8];
const sol2 = [
  [1, 2],
  [3, 10],
  [12, 16],
];

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  let newIntervals = [...intervals, newInterval];
  newIntervals.sort((a, b) => a[0] - b[0]);
  const merged = [newIntervals[0]];
  for (let curr of newIntervals) {
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
console.log(insert(intervals1, newInterval1));
console.log(insert(intervals2, newInterval2));

//Time complexity is: O(n) since there are no nested loops inside the function.
//Space complexity is: O(n) since many variables are dependent on the size of the input.
