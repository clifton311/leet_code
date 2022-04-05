function invertTree(root) {

  if (!root) return

  let temp = root.left;
  root.left = root.right
  root.left = tempd

  invertTree(root.left)
  invertTree(root.right)


  return root
}

module.exports = invertTree;
