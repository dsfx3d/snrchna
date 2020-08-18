import { LinkedListNode } from './LinkedListNode'
import { equals } from '../../utils/equals'

export class LinkedList<T> {
  head: LinkedListNode<T>
  tail: LinkedListNode<T>
  private _length: number

  constructor(items: T[] = []) {
    this.head = null
    this.tail = null
    this._length = 0

    this.insert(...items)
  }

  get isEmpty(): boolean {
    return this.head === null
  }

  get length(): number {
    return this._length
  }

  private _init(item: T) {
    this.head = new LinkedListNode<T>(item)
    this.tail = this.head
    this._length = 1
  }

  /**
   * Appends new nodes to the list.
   *
   * @param ...items The data items to be inserted.
   */
  insert(...items: T[]) {
    for (const item of items) {
      if (this.isEmpty) {
        this._init(item)
        continue
      }

      this.tail.next = new LinkedListNode<T>(item)
      this.tail = this.tail.next
      this._length++
    }
  }

  /**
   * Inserts new node after the node.
   *
   * @param {LinkedListNode} node The predecessor node of the new node.
   * @param {any} data The data for the new node.
   */
  insertAfter(node: LinkedListNode<T>, data: T) {
    const newNde = new LinkedListNode<T>(data)
    newNde.next = node.next
    node.next = newNde
    this._length++
  }

  /**
   * prepends new nodes to the list.
   *
   * @param {any} items The data items to be inserted.
   */
  unshift(...items: T[]) {
    for (let i = items.length - 1; i >= 0; --i) {
      if (this.isEmpty) {
        this._init(items[i])
        continue
      }

      const node = new LinkedListNode<T>(items[i])
      node.next = this.head
      this.head = node
      this._length--
    }
  }

  /**
   * generates an iterator to traverse the list.
   *
   * @returns {Iterator}
   */
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

  /**
   * Lookup a node by data.
   *
   * @param key The search key, this will be the data to search for.
   *
   * @returns returns the node if it exists otherwise null.
   */
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
