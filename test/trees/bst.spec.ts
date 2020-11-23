import { BST, TraversalPolicy } from '../../src/lib/trees/bst'
import { BSTNode } from '../../src/lib/trees/bst/BSTNode'

describe('BST', () => {
  it('can insert nodes', () => {
    const tree = new BST(8)
    tree.insert(3, 10, 1, 6, 14, 4, 7, 13)

    const depthFirst = []
    tree.traverse(TraversalPolicy.DEPTH_FIRST, (node: BSTNode<number>) => {
      depthFirst.push(node.data);
    })

    console.log(depthFirst);
  })
})
