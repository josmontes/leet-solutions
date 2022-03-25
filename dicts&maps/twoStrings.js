/**
Given two strings, determine if they share a common substring. A substring may be as small as one character.
 */

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
  let letterMap = new Map();
  for (const char of s1) {
    if (!letterMap.has(char)) letterMap.set(char, 0);
  }
  for (const char of s2) {
    if (letterMap.has(char)) return "YES";
  }
  return "NO";
}
