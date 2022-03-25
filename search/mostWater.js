/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 */

/**
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water the container can contain is 49.
 */

//Cases
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const solution1 = 49;

const height2 = [1, 1];
const solution2 = 1;

function maxArea(height) {
  let maxWater = 0;
  //Start at biggest distance possible between both walls
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  while (leftIndex < rightIndex) {
    let leftWall = height[leftIndex];
    let rightWall = height[rightIndex];
    let currWater = Math.min(leftWall, rightWall) * (rightIndex - leftIndex);
    maxWater = Math.max(currWater, maxWater);
    // check next wall depending on which one is shorter
    if (leftWall <= rightWall) leftIndex++;
    if (rightWall <= leftWall) rightIndex--;
  }
  return maxWater;
}

//Log results and check if correct
console.log(maxArea(height1), maxArea(height1) === solution1);
console.log(maxArea(height2), maxArea(height2) === solution2);

//Time Complexity is: O(n) since only one loop is running inside the function.
//Space complexity is: O(1) since no assignment grows dependent to the size of the input.