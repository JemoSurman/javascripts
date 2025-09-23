const { Node, depthFirstTraversal } = require('./depth-first-traversal');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f
const root = new Node('a');
const NodeB = new Node('b');
const NodeC = new Node('c');
const NodeD = new Node('d');
const NodeE = new Node('e');
const NodeF = new Node('f');

root.left = NodeB;
root.right = NodeC;
NodeB.right = NodeE;
NodeB.left = NodeD;
NodeC.left = NodeF;

const result = depthFirstTraversal(root);

console.log(result);
