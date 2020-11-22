import { BSTNode } from "./BSTNode";

export class BST<T> {
  root: BSTNode<T>

  constructor(root: T) {
    this.root = new BSTNode(root)
  }

  insert(...values: T[]) {
    values.forEach(value => this.root.addChild(value))
  }

  traverse(policy: TraversalPolicy, cb: Function) {
    switch(policy) {
      case TraversalPolicy.PRE_ORDER:
        this.preOrder(this.root, cb)
        break
    }
  }

  private preOrder(subTree: BSTNode<T>, cb: Function) {
    if (subTree === null) {
      return
    }

    cb(subTree)

    if (subTree.leftChild) {
      this.preOrder(subTree.leftChild, cb)
    }

    if (subTree.rightChild) {
      this.preOrder(subTree.rightChild, cb)
    }
  }
}

export enum TraversalPolicy {
  PRE_ORDER,
  IN_ORDER,
  POST_ORDER,
  LEVEL_ORDER,
  CUSTOM
}

function levelOrderPolicy<T>(nodeQueue: BSTNode<T>[], cb: Function) {
  if (nodeQueue.length === 0) {
    return
  }

  const node = nodeQueue.shift()

  if (node.leftChild) {
    nodeQueue.push(node.leftChild)
  }

  if (node.rightChild) {
    nodeQueue.push(node.rightChild)
  }

  cb(node)

  levelOrderPolicy(nodeQueue, cb)
}
