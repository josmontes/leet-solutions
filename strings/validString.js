/**
Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
It is also valid if he can remove just 1 character at 1 index in the string, 
and the remaining characters will occur the same number of times. 
Given a string s, determine if it is valid. If so, return YES, otherwise return NO.
 */

function isValid(s) {
  // Dictionary of letter frequencies
  let dict = {};
  for (const char of s) {
      if (dict[char]) {
          dict[char]++;
      } else dict[char] = 1;
  }
  //Obtain letter frequencies
  let values = Object.values(dict);
  //Get most repeated frequency
  let sortArr = Array(values.length).fill(0);
  let repeated;
  let maxVal;
  for (let val of values) {
      sortArr[val] = ++sortArr[val] || 1;
      if (maxVal === undefined || sortArr[val] > maxVal) {
          repeated = val;
          maxVal = sortArr[val];
      }
  }
  //Count differences in frequencies
  let count = 0;
  for (let i = 0; i < values.length; i++) {
      if (values[i] !== repeated) {
          //Exclude case when character is unique and no other characters have dif frequencies
          if (count === 0 && values[i] === 1 && sortArr[1] === 1) continue;
          count += Math.abs(values[i] - repeated);
      }
      if (count > 1) return "NO";
  }
  return "YES"
}