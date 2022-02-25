/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 */

/**
 * Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

//Cases
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const sol1 = 6;

const nums2 = [1];
const sol2 = 1;

const nums3 = [5, 4, -1, 7, 8];
const sol3 = 23;

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let subSum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    subSum = Math.max(subSum + nums[i], nums[i]);
    max = Math.max(subSum, max);
  }
  return max;
}

//Log results and check if correct
console.log(maxSubArray(nums1), maxSubArray(nums1) === sol1);
console.log(maxSubArray(nums2), maxSubArray(nums2) === sol2);
console.log(maxSubArray(nums3), maxSubArray(nums3) === sol3);

//Time complexity is: O(n) since there is a for loop.
//Space complexity is: O(1) since no variable size is dependent to the input size.
