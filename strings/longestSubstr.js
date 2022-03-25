/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

//Cases
const s1 = "abcabcbb";
const solution1 = 3;

const s2 = "bbbbb";
const solution2 = 1;

const s3 = "pwwkew";
const solution3 = 3;

/**
 * @param {string} s
 * @return {number}
 */
 function lengthLongestSubstr (s) {
    let max = 0;
    //Do it with map instead of string and then get the entries and join
    let unrepeated = "";
    for (let i = 0; i < s.length; i++) {
        if (unrepeated.includes(s[i])) {
            if (unrepeated.length > max) {
                max = unrepeated.length;
            }
            //Cut previous repeated character and adds it at the end of the string.
            unrepeated = unrepeated.split(s[i])[1] + s[i];
        } else {
            unrepeated+= s[i];
        }
    }
    //Returns either a previous maximum unrepeated string or the current one
    return Math.max(max, unrepeated.length);
};

//Log results and if correct
console.log(lengthLongestSubstr(s1), lengthLongestSubstr(s1) === solution1);
console.log(lengthLongestSubstr(s2), lengthLongestSubstr(s2) === solution2);
console.log(lengthLongestSubstr(s3), lengthLongestSubstr(s3) === solution3);

//Time complexity is: O(n^2) since there is a for loop and inside of it the Array.includes method.
//Space complexity is: O(1) since it doesn't matter how big the input string is, the unrepeated string can be at most 26.