import { DataNode } from '../DataNode'

export class LinkedListNode<T = any> extends DataNode<T, LinkedListPointer<T>> {
  constructor(data: T) {
    super(data)
    this._pointers.next = null
    return new Proxy(this, {
      get(target: LinkedListNode<T>, prop, receiver) {
        if (prop === 'next') {
          return target.pointers.next
        } else {
          return Reflect.get(target, prop, receiver)
        }
      },

      set(target: LinkedListNode<T>, prop, value, receiver) {
        if (prop === 'next') {
          target._pointers.next = value
          return true
        } else {
          throw new Error(`cannot set ${String(prop)}`)
        }
      }
    })
  }
  next: LinkedListNode<T>
}

interface LinkedListPointer<T> {
  next: LinkedListNode<T>
}
