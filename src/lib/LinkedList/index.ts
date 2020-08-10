import { LinkedListNode } from './LinkedListNode'
import { equals } from '../../utils/equals'

export class LinkedList<T> {
  head: LinkedListNode<T>
  tail: LinkedListNode<T>
  private _length: number

  constructor(items: T[] = []) {
    this.head = null
    this.tail = null

    this.insert(...items)
  }

  get isEmpty(): boolean {
    return this.head === null
  }

  get length(): number {
    return this._length
  }

  insert(...items: T[]) {
    for (const item of items) {
      if (this.head === null) {
        this.head = new LinkedListNode<T>(item)
        this.tail = this.head
        this._length = 1
        continue
      }

      this.tail.next = new LinkedListNode<T>(item)
      this.tail = this.tail.next
      this._length++
    }
  }

  *getIterator(): Generator<LinkedListNode<T>, LinkedListNode<T>> {
    if (this.head) {
      let cursor = this.head
      while (cursor) {
        yield cursor
        if (cursor.next) {
          cursor = cursor.next
        } else {
          return null
        }
      }
    }
  }

  search(key: T): LinkedListNode<T> {
    const iterator = this.getIterator()
    let cursor
    do {
      cursor = iterator.next()
      if (cursor.value && equals(key, cursor.value.data)) {
        return cursor.value
      }
    } while (cursor.value && cursor.value.next)
    return null
  }
}
