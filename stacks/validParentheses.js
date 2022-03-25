/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */

//Cases
const s1 = "()";
const sol1 = true;

const s2 = "()[]{}";
const sol2 = true;

const s3 = "(]";
const sol3 = false;

/**
 * @param {string} s
 * @return {boolean}
 */
function isBalanced(s) {
  // Write your code here
  //If string starts with an ending bracket exit
  if (["}", "]", ")"].includes(s[0])) return "NO";
  //Add first char to openBrackets array
  let openBrackets = [s[0]];
  //Loop through all string length
  for (let i = 1; i < s.length; i++) {
    //Compare curr value against last value of the openBrackets array
    switch (s[i]) {
      case "}":
        if (openBrackets.pop() !== "{") return "NO";
        break;
      case "]":
        if (openBrackets.pop() !== "[") return "NO";
        break;
      case ")":
        if (openBrackets.pop !== "(") return "NO";
        break;
      default:
        openBrackets.push(s[i]);
    }
  }
  //If openBrackets is not empty, it means that there were more open brackets than closing ones
  if (openBrackets.length > 0) return "NO";
  else return "YES";
}

//Log results and check if correct
console.log(isValid(s1), isValid(s1) === sol1);
console.log(isValid(s2), isValid(s2) === sol2);
console.log(isValid(s3), isValid(s3) === sol3);

//Time complexity is: O(n) since there is a for loop running inside the function.
//Space complexity is: O(n) since stack grows as the input grows.
