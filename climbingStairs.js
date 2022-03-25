/**
 * You are climbing a staircase.
 * It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 */

/**
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 */

/**
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

//Cases
const n1 = 2,
  sol1 = 2;
const n2 = 3,
  sol2 = 3;
const n3 = 4,
  sol3 = 5;

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let a = (b = 1);
  while (n--) {
    a = (b += a) - a;
  }
  return a;
}

//Log results and check if correct
console.log(climbStairs(n1), climbStairs(n1) === sol1);
console.log(climbStairs(n2), climbStairs(n2) === sol2);
console.log(climbStairs(n3), climbStairs(n3) === sol3);

//Time complexity is O(n) since only 1 loop is running inside the function.
//Space complexity is O(1) since no variable size depends directly on the input size.

//Bonus one-line solution with O(1) time complexity
// function climbStairs(n) {
//   return int(
//     (5 ** 0.5 / 5) *
//       (((1 + 5 ** 0.5) / 2) ** (n + 1) - ((1 - 5 ** 0.5) / 2) ** (n + 1))
//   );
// }
