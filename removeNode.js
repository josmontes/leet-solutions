/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

/**
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */

/**
 * Note:
 * Ask if there can be 'empty' entries in the array. (Not that it really matters tho)
 */

//Cases
const head1 = [1, 2, 3, 4, 5];
const n1 = 2;
const sol1 = [1, 2, 3, 5];

const head2 = [1];
const n2 = 1;
const sol2 = [];

const head3 = [1, 2];
const n3 = 1;
const sol3 = [1];

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  //Assign to new array to avoid modifying the input directly.
  //Note: If you submit this solution on Leet, it will fail because it highlights the spread operator as an error
  const newArr = [...head];
  newArr.reverse().splice(n - 1, 1);
  return newArr.reverse();
}

//Log results
console.log(removeNthFromEnd(head1, n1));
console.log(removeNthFromEnd(head2, n2));
console.log(removeNthFromEnd(head3, n3));

//Time complexity is: O(n) since the spread operator iterates on each item of the array where used.
//Space complexity is: O(n) since there is an assignment which grows as the input grows.
