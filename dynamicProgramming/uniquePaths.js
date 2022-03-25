/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The test cases are generated so that the answer will be less than or equal to 2 * 10^9.
 */

/**
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 3. Down -> Right -> Down
 * 2. Down -> Down -> Right
 */

//Cases
const m1 = 3,
  n1 = 2;
const sol1 = 3;

const m2 = 3,
  n2 = 7;
const sol2 = 28;

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  //Initialize array filled with 1s with n length
  let sol = Array(n).fill(1);
  //Run loop of columns
  for (let j = 1; j < m; j++) {
    //Inside loop of columns run loop of rows and add the previous index to the current one (starting from the second index)
    for (let i = 1; i < n; i++) {
      sol[i] += sol[i - 1];
    }
  }
  //Return the last value as it is the number of possible combinations
  return sol[sol.length - 1];
}

//Log results and check if correct
console.log(uniquePaths(m1, n1), uniquePaths(m1, n1) === sol1);
console.log(uniquePaths(m2, n2), uniquePaths(m2, n2) === sol2);

//Time complexity is: O(n^2) since there is a nested loop inside the function.
//Space complexity is: O(n) since there is an array that depends directly on the size of the input.
