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
function isValid(s) {
  //If s is not even return false
  if (s.length % 2 !== 0) return false;
  //Store open bracket and close it with matching pair
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    //Add matching bracket to the stack, if c is a closing bracket, check if it's the same if not return false
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;

      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }
  //If any are still open return false else true
  return stack.length === 0;
}

//Log results and check if correct
console.log(isValid(s1), isValid(s1) === sol1);
console.log(isValid(s2), isValid(s2) === sol2);
console.log(isValid(s3), isValid(s3) === sol3);

//Time complexity is: O(n) since there is a for loop running inside the function.
//Space complexity is: O(n) since stack grows as the input grows.
