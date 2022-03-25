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

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor(head) {
    this.head = head;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode)
      while (lastNode) {
        lastNode = lastNode.next;
      }
    return lastNode;
  }

  size() {
    let node = this.head;
    let size = 0;
    if (node)
      while (node) {
        size++;
        node = node.next;
      }
    return size;
  }

  genLinks(nodes) {
    let node = this.head;
    let i = 0;
    if (nodes.length === 0) return this;
    if (!node) {
      this.head = new LinkNode(nodes[0]);
      node = this.head;
      i++;
    }
    while (node && i < nodes.length) {
      node.next = new LinkNode(nodes[i]);
      node = node.next;
      i++;
    }
    return this;
  }

  printList() {
    let node = this.head;
    let string = "";
    if (node)
      while (node) {
        string += `${node.val}${node.next ? " -> " : ""}`;
        node = node.next;
      }
    return string;
  }
}

var mergeKLists = function (lists) {
  if (lists.length > 0) {
    let merged = [];
    for (const list of lists) {
      merged = merged.concat(list);
    }
    merged.sort((a, b) => a - b);
    let linked = new LinkList().genLinks(merged).printList();
    return linked;
  }
  return new LinkList().genLinks(lists).printList();
};

//Log results
console.log(mergeKLists(lists1));
console.log(mergeKLists(lists2));
console.log(mergeKLists(lists3));

//Time complexity is: O(n)
//Space complexity is: O(n) since there is an array that grows dependent on the input size.
