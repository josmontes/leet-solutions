/**
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
 */

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let found = {};

    for (let j = 0; j + i <= s.length; j++) {
      let substr = s.substr(j, i);
      if (substr) {
        substr = substr.split("").sort().join("");
        if (found[substr]) {
          count += found[substr];
          found[substr]++;
        } else {
          found[substr] = 1;
        }
      }
    }
  }
  return count;
}
