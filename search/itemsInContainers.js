function itemsInContainers(s, startIndices, endIndices) {
  let len = s.length;
  let starsCount = Array(len).fill(0);
  //Initialize and check for edge cases
  let leftIndex = Array(len).fill(-1);
  if (s.charAt(0) === "|") leftIndex[0] = 0;
  let rightIndex = Array(len).fill(-1);
  if (s.charAt(len - 1) === "|") rightIndex[len - 1] = 0;
  let count = 0;
  for (let i = 1; i < len; i++) {
    //Find the last pole from left to right and count stars between poles
    if (s.charAt(i) === "|") {
      leftIndex[i] = i;
      if (leftIndex[i - 1] !== -1) {
        starsCount[i] = count;
      }
    } else {
      leftIndex[i] = leftIndex[i - 1];
      if (leftIndex[i] !== -1) count++;
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    //Find the last pole from right to left
    if (s.charAt(i) === "|") {
      rightIndex[i] = i;
    } else {
      rightIndex[i] = rightIndex[i + 1];
    }
  }
  let ans = [];
  for (let j = 0; j < startIndices.length; j++) {
    let si = startIndices[j] - 1,
      ei = endIndices[j] - 1;
    //Left pole is the first pole to the right of the startIndex
    let left = rightIndex[si],
    //right pole is the first pole to the left of the endIndex
      right = leftIndex[ei];
    let result =
      //if no left or right pole, no items are contained.
      //else substract count of items to the left of the range.
      left !== -1 && right !== -1 ? starsCount[right] - starsCount[left] : 0;
    ans.push(result);
  }
  return ans;
}

console.log(itemsInContainers("|**|*|*", [1, 1, 2], [5, 7, 7])); //[2,3,1]
console.log(itemsInContainers("*|**|*|**|****|*", [4, 1, 4], [8, 16, 11])); //[1, 9, 3]
console.log(itemsInContainers("*****|*****", [1, 4, 1, 7], [5, 8, 11, 9])); //[0, 0, 0, 0]
