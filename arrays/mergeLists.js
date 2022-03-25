/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

/**
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 */

//Cases
const lists1 = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
const sol1 = [1, 1, 2, 3, 4, 4, 5, 6];

const lists2 = [];
const sol2 = [];

const lists3 = [[]];
const sol3 = [];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length > 0) {
    let merged = [];
    for (const list of lists) {
      merged.concat(list);
    }
    return merged.sort((a, b) => a - b);
  }
  return lists;
};

//Log results
console.log(mergeKLists(lists1));
console.log(mergeKLists(lists2));
console.log(mergeKLists(lists3));

//Time complexity is: O(n)
//Space complexity is: O(n) since there is an array that grows dependent on the input size.
