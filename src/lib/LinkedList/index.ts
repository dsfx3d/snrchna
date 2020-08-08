// import { ILinkedList } from '../../../types/ILinkedList'
import { DataNode } from './DataNode'

export class LinkedList<T> {
  head: DataNode<T>
  tail: DataNode<T>
  private _length: number

  constructor(items: T[] = []) {
    this.head = null
    this.tail = null

    this.add(...items)
  }

  get length(): number {
    return this._length
  }

  add(...items: T[]) {
    for (const item of items) {
      if (this.head === null) {
        this.head = new DataNode<T>(item)
        this.tail = this.head
        this._length = 1
        continue
      }

      const node = new DataNode<T>(item)
      this.tail.pointer.next = node
      this.tail = node
      this._length++
    }
  }

  *makeIterator(): Generator<DataNode<T>, DataNode<T>> {
    if (this.head) {
      let cursor = this.head
      while (cursor) {
        yield cursor
        if (cursor.pointer.next) {
          cursor = cursor.pointer.next
        } else {
          return null
        }
      }
    }
  }
}
