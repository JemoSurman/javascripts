class Node {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function maxDepth(root) {
  if(!root) return [];

  const rightDepth = maxDepth(root.right);
  const leftDepth = maxDepth(root.left);
  

  return Math.max(leftDepth, rightDepth) + 1;
}

module.exports = {
  maxDepth,
  Node,
};
