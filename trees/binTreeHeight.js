/**
The height of a binary tree is the number of edges between the tree's root and its furthest leaf.
 */

class Node {
  // this is a node of the tree , which contains info as data, left , right
  constructor(info) {
    this.info = info;
    this.left = null;
    this.right = null;
  }
}
function getHeight(root) {
  let left_height = 0,
    right_height = 0;
  //Base Case
  //When the next node is null, we substract 1 from the tree height
  if (!root.info) return -1;
  //Recursive Case
  //If there is a node, we add 1 to the height, and calculate again
  if (root.left !== null) left_height = 1 + getHeight(root.left);
  if (root.right !== null) right_height = 1 + getHeight(root.right);
  return max(left_height, right_height);
}
