/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

//Cases
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const sol1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

const strs2 = [""];
const sol2 = [[""]];

const strs3 = ["a"];
const sol3 = [["a"]];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  let groups = new Map();
  for (const str of strs) {
    let sorted = str.split("").sort().join();
    if (groups.has(sorted)) {
      groups.set(sorted, groups.get(sorted).concat(str));
    } else {
      groups.set(sorted, [str]);
    }
  }
  return Array.from(groups.values());
}

//Log the results
console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));
console.log(groupAnagrams(strs3));

//Time complexity is: O(n) since only the for loop is running.
//Space complexity is: O(n) since the Map grows dependent on the size of the input.
