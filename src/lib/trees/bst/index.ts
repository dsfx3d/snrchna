import { BSTNode } from "./BSTNode";

export class BST<T> {
  root: BSTNode<T>
  totalNodes: number

  constructor(root: T) {
    if (root) {
      this.root = new BSTNode(root)
    }
  }

  insert(...values: T[]) {
    values.forEach(value => this.root.addChild(value))
  }

  traverse(policy: TraversalPolicy, cb: Function) {
    switch(policy) {
      case TraversalPolicy.PRE_ORDER:
        this.preOrder(this.root, cb)
        break
      case TraversalPolicy.IN_ORDER:
        this.inOrder(this.root, cb)
        break
      case TraversalPolicy.POST_ORDER:
        this.postOrder(this.root, cb)
      case TraversalPolicy.LEVEL_ORDER:
        this.levelOrder([this.root], cb)
        break
      case TraversalPolicy. DEPTH_FIRST:
        this.depthFirst([this.root], cb)
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

  private inOrder(subTree: BSTNode<T>, cb: Function) {
    if (subTree === null) {
      return
    }

    if (subTree.leftChild) {
      this.inOrder(subTree.leftChild, cb)
    }

    cb(subTree)

    if (subTree.rightChild) {
      this.inOrder(subTree.rightChild, cb)
    }
  }

  private postOrder(subTree: BSTNode<T>, cb: Function) {
    if (subTree === null) {
      return
    }

    if (subTree.leftChild) {
      this.postOrder(subTree.leftChild, cb)
    }

    if (subTree.rightChild) {
      this.postOrder(subTree.rightChild, cb)
    }

    cb(subTree)
  }

  private levelOrder(nodeQueue: BSTNode<T>[], cb: Function) {
    if (nodeQueue.length === 0) {
      return
    }

    const node = nodeQueue.shift()

    cb(node)

    if (node.leftChild) {
      nodeQueue.push(node.leftChild)
    }

    if (node.rightChild) {
      nodeQueue.push(node.rightChild)
    }

    this.levelOrder(nodeQueue, cb)
  }

  private depthFirst(nodeStack: BSTNode<T>[], cb: Function) {
    if (nodeStack.length === 0) {
      return
    }

    const node = nodeStack.pop()

    cb(node)

    if (node.leftChild) {
      nodeStack.push(node.leftChild)
    }

    if (node.rightChild) {
      nodeStack.push(node.rightChild)
    }

    this.depthFirst(nodeStack, cb)
  }
}

export enum TraversalPolicy {
  PRE_ORDER,
  IN_ORDER,
  POST_ORDER,
  LEVEL_ORDER,
  DEPTH_FIRST
}
