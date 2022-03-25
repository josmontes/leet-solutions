/**
A binary tree is a tree which is characterized by one of the following properties:
It can be empty (null).
It contains a root node only.
It contains a root node with a left subtree, a right subtree, or both. These subtrees are also binary trees.
In-order traversal is performed as

Traverse the left subtree.
Visit root.
Traverse the right subtree.
For this in-order traversal, start from the left child of the root node and keep exploring the left subtree until you reach a leaf. 
When you reach a leaf, back up to its parent, check for a right child and visit it if there is one. 
If there is not a child, you've explored its left and right subtrees fully.
If there is a right child, traverse its left subtree then its right in the same manner.
Keep doing this until you have traversed the entire tree. 
You will only store the values of a node as you visit when one of the following is true:

it is the first node visited, the first time visited
it is a leaf, should only be visited once
all of its subtrees have been explored, should only be visited once while this is true
it is the root of the tree, the first time visited
Swapping: Swapping subtrees of a node means that if initially node has left subtree L and right subtree R, 
then after swapping, the left subtree will be R and the right subtree, L.

For example, in the following tree, we swap children of node 1.
                                Depth
    1               1            [1]
   / \             / \
  2   3     ->    3   2          [2]
   \   \           \   \
    4   5           5   4        [3]
In-order traversal of left tree is 2 4 1 3 5 and of right tree is 3 5 1 2 4.

Swap operation:
We define depth of a node as follows:
The root node is at depth 1.
If the depth of the parent node is d, then the depth of current node will be d+1.
Given a tree and an integer, k, in one operation, we need to swap the subtrees of all the nodes at each depth h,
where h ∈ [k, 2k, 3k,...]. In other words, if h is a multiple of k, swap the left and right subtrees of that level.

You are given a tree of n nodes where nodes are indexed from [1..n] and it is rooted at 1. 
You have to perform t swap operations on it, and after each swap operation print the in-order traversal of 
the current state of the tree.
 */

class BinTree {
  constructor(index, level) {
    this.index = index;
    this.level = level;
    this.left = null;
    this.right = null;
  }

  addLeft(newChild) {
    this.left = newChild;
  }

  addRight(newChild) {
    this.right = newChild;
  }

  swapChildren(query) {
    if (this.level % query === 0) {
      let temp = this.right;
      this.right = this.left;
      this.left = temp;
    }
    if (this.left) this.left.swapChildren(query);
    if (this.right) this.right.swapChildren(query);
  }

  getTraversal(traversal = []) {
    if (this.left) this.left.getTraversal(traversal);
    traversal.push(this.index);
    if (this.right) this.right.getTraversal(traversal);
    return traversal;
  }
}

/*
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY indexes
 *  2. INTEGER_ARRAY queries
 */
function swapNodes(indexes, queries) {
  let traversals = [];
  //1. Construct Tree Class
  let root = new BinTree(1, 1);
  let q = [root];
  let i = 0;
  while (q.length !== 0) {
    //BFS Algo (queue)
    //Take first tree in line
    let currTree = q.shift();
    if (indexes[i][0] !== -1) {
      let subTree = new BinTree(indexes[i][0], currTree.level + 1);
      currTree.addLeft(subTree);
      //Add new tree to the end of line
      q.push(subTree);
    }
    if (indexes[i][1] !== -1) {
      let subTree = new BinTree(indexes[i][1], currTree.level + 1);
      currTree.addRight(subTree);
      //Add new tree to the end of line
      q.push(subTree);
    }
    i++;  
  }
  //2. Swap and Traversal
  for (const query of queries) {
    root.swapChildren(query);
    traversals.push(root.getTraversal());
  }
  return traversals;
}
