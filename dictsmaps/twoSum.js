/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

//Cases
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const solution1 = [0, 1];

const nums2 = [3, 2, 4];
const target2 = 6;
const solution2 = [1, 2];

const nums3 = [3, 3];
const target3 = 6;
const solution3 = [0, 1];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let visited = new Map();
  for (let [index, value] of nums.entries()) {
    let reqNum = target - value;
    if (visited.has(reqNum)) {
      return [index, visited.get(reqNum)];
    } else {
      visited.set(value, index);
    }
  }
}

//Log results
console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));

//Time complexity is: O(n) since only one loop is executed and it will grow as the input grows.

//Space complexity is: O(n) since we assign a map and the map will grow as the input grows.
