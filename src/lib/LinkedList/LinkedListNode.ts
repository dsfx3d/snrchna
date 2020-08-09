import { DataNode } from '../DataNode'

export class LinkedListNode<T> extends DataNode<T, LinkedListNodePointer<T>>
  implements LinkedListNodePointer<T> {
  next: LinkedListNode<T>
  constructor(data: T) {
    super(data)
    return new Proxy(this, {
      get(target: LinkedListNode<T>, prop, receiver) {
        if (prop === 'next') {
          return target.pointers.next
        } else {
          return Reflect.get(target, prop, receiver)
        }
      }
    })
  }
}

interface LinkedListNodePointer<T> {
  next: LinkedListNode<T>
}
