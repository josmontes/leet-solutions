/**
 * You are given an integer array nums.
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

/**
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */

/**
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what.
 * Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

//Cases
const nums1 = [2, 3, 1, 1, 4];
const sol1 = true;

const nums2 = [3, 2, 1, 0, 4];
const sol2 = false;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  //Define index, maxJump and target
  let i = 0;
  let max = 0;
  let target = nums.length - 1;
  //Same as a for loop
  while (i < nums.length) {
    //Assign what is bigger, previous maxJump vs current maxJump (index + its value)
    max = Math.max(max, i + nums[i]);
    //If maxJump is bigger or equal to target
    if (max >= target) {
      return true;
    }
    //If we arrived to a 0 value and we can't jump forward
    if (max <= i && nums[i] === 0) {
      return false;
    }
    //If none of the above, continue to the next index
    i++;
  }
  return false;
}

//Log results and check if correct
console.log(canJump(nums1), canJump(nums1) === sol1);
console.log(canJump(nums2), canJump(nums2) === sol2);

//Time complexity is: O(n) since only a while loop is implemented.
//Space complexity is: O(1) since no variable size depend directly on input size.
