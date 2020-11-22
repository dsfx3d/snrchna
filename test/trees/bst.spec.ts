import { BST, TraversalPolicy } from '../../src/lib/trees/bst'
import { BSTNode } from '../../src/lib/trees/bst/BSTNode'

describe('BST', () => {
  it('foo', () => {
    const tree = new BST(12)
    tree.insert(13, 14, 5, 8, 9, 16, 20, 3, 2)

    const preOrder = []
    tree.traverse(TraversalPolicy.PRE_ORDER, (node: BSTNode<number>) => {
      preOrder.push(`${node.data}(${node.leftChild?.data}, ${node.rightChild?.data})`);
    })

    console.log(preOrder);
  })
})
