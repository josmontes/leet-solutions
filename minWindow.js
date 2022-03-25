/**
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * A substring is a contiguous sequence of characters within the string.
 */

/**
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */

/**
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 */

/**
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 */

//Cases
const s1 = "ADOBECODEBANC",
  t1 = "ABC",
  sol1 = "BANC";
const s2 = "a",
  t2 = "a",
  sol2 = "a";
const s3 = "a",
  t3 = "aa",
  sol3 = "";

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  let ans = "";
  let arrT = t.split("");
  for (let i = 0; i < s.length; i++) {
    if (arrT.includes(s[i])) {
      ans.concat(s[i]);
    } else {
      ans = "";
    }
  }
  return ans;
}

//Log results and check if correct
console.log(minWindow(s1, t1), minWindow(s1, t1) === sol1);
console.log(minWindow(s2, t2), minWindow(s2, t2) === sol2);

//Could you find an algorithm that runs in O(m + n) time?
