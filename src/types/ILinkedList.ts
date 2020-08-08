import { DataNode } from '../lib/LinkedList/DataNode'

export interface ILinkedList<T> {
  head: DataNode<T>
  tail: DataNode<T>
  length: number

  /**
   * @yields The next node in the list starting from the head.
   */
  next(): Generator<DataNode<T>> | null
}
