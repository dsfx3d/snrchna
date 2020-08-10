import { LinkedListNode } from '../lib/LinkedList/LinkedListNode'

export interface ILinkedList<T> {
  head: LinkedListNode<T>
  tail: LinkedListNode<T>
  length: number

  /**
   * @yields The next node in the list starting from the head.
   */
  next(): Generator<LinkedListNode<T>> | null
}

export interface LinkedListPointer<T> {
  next: LinkedListNode<T>
}
