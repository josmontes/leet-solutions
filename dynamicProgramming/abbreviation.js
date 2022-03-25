/**
You can perform the following operations on the string, a:
Capitalize zero or more of a's lowercase letters.
Delete all of the remaining lowercase letters in a.
Given two strings, a and b, determine if it's possible to make a equal to b as described.
If so, print YES on a new line. Otherwise, print NO.
 */

function abbreviation(a, b) {
  // Write your code here
  //Initialize double array
  let dp = Array(a.length + 1).fill(0);
  for (let i = 0; i <= a.length; i++) {
    dp[i] = Array(b.length + 1).fill(0);
  }
  dp[0][0] = 1;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (dp[i][j] === 0) continue;
      //If a is upperCase and matches b
      if (j < b.length && a[i].toUpperCase() === b[j]) dp[i + 1][j + 1] = 1;
      //If a is lowercase it doesn't matter since it can be removed or capitalized
      if (a[i] !== a[i].toUpperCase()) dp[i + 1][j] = 1;
    }
  }
  return dp[a.length][b.length] ? "YES" : "NO";
}
