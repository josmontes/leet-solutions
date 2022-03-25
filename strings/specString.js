/**
A string is said to be a special string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special substring is any substring of a string which meets one of those criteria. 
Given a string, determine how many special substrings can be formed from it.
*/

function substrCount(n, s) {
  let count = n;
  for (let i = 0; i < s.length; i++) {
    let nextIndex = i;
    while (s[i] === s[nextIndex + 1]) nextIndex++;
    if (i !== nextIndex) {
      const length = nextIndex - i;
      //Update count to the sum of substrings that can be done combining prev chars
      count += (length * (length + 1)) / 2;
      i = nextIndex;
    } else {
      let step = 1;
      
      while (s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
        step++;
        count++;
      }
    }
  }
  return count;
}
