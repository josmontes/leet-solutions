/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

//Cases
const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
const sol1 = 4;

const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;
const sol2 = -1;

const nums3 = [1];
const target3 = 0;
const sol3 = -1;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  //Start at the beggining and end
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    //Get the middle index
    let mid = Math.floor((start + end) / 2);
    //If the value of the middle index is bigger than the value of the endIndex: Rotation must be in the second half
    if (nums[mid] > nums[end]) {
      //If target is bigger than the value of the middle index or smaller than the value of endIndex cut array to the second half, else first half
      if (target > nums[mid] || target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    //Opposite of what happened above
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
  }
  //If start is the same as end and target wasn't found, it means that the target is not on the array
  if (start === end && target != nums[start]) return -1;
  return start;
}

//Log results and check if correct
console.log(search(nums1, target1), search(nums1, target1) === sol1);
console.log(search(nums2, target2), search(nums2, target2) === sol2);
console.log(search(nums3, target3), search(nums3, target3) === sol3);

//Time complexity is: O(logn) since we are using binary search, on each iteration, the array will be cut in half.
//Space complexity is: O(1) since no variable size depends directly on the input size.
