import { IDataNode } from "../../../types/IDataNode";
import { BSTPointer } from "../../../types/trees/pointers";

export class BSTNode<T> implements IDataNode<T> {
  data: T;
  protected pointers: BSTPointer<BSTNode<T>>;

  constructor(data: T) {
    this.data = data;
    this.pointers = {
      left: null,
      right: null
    }
  }

  get leftChild() {
    return this.pointers.left
  }

  set leftChild(child: BSTNode<T>) {
    this.pointers.left = child
  }

  get rightChild() {
    return this.pointers.right
  }

  set rightChild(child: BSTNode<T>) {
    this.pointers.right = child
  }

  addChild(value: T) {
    if (value <= this.data) {
      if (this.leftChild) {
        this.leftChild.addChild(value)
      } else {
        this.leftChild = new BSTNode<T>(value)
      }
    } else {
      if (this.rightChild) {
        this.rightChild.addChild(value)
      } else {
        this.rightChild = new BSTNode<T>(value)
      }
    }
  }

  equals(node: this): boolean {
    throw new Error("Method not implemented.")
  }
}
