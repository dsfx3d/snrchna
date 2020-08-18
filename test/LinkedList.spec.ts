import { LinkedList } from '../src/index'
import { LinkedListNode } from '../src/lib/LinkedList/LinkedListNode'
import { equals } from '../src/utils/equals'

describe('Data Structure: LinkedList', () => {
  it('can initialize with an array', () => {
    const items = [1, 2, 3, 4, 5]
    const list = new LinkedList<number>(items)
    expect(list.length).toBe(5)

    let cursor = list.head
    for (const item of items) {
      expect(cursor.data).toBe(item)
      cursor = cursor.next
    }
  })

  it('has property isEmpty to check if list is empty', () => {
    const list = new LinkedList<number>()
    expect(list.isEmpty).toBeTruthy()
  })

  it('has property length to get the number of nodes in the list', () => {
    const emptyList = new LinkedList<number>()
    expect(emptyList.length).toBe(0)

    // initialized with constructor
    const list = new LinkedList<number>([1, 2])
    expect(list.length).toBe(2)

    // insert single node
    list.insert(3)
    expect(list.length).toBe(3)

    // insert multiple nodes
    list.insert(3, 4, 5)
    expect(list.length).toBe(6)

    // prepend single node
    list.unshift(1)
    expect(list.length).toBe(7)

    // prepend multiple node
    list.unshift(1, 2, 3)
    expect(list.length).toBe(10)
  })

  it('has a method insert to append nodes to the list', () => {
    const list = new LinkedList<number>([1, 2])
    list.insert(3, 4, 5)

    let node = list.head
    for (let i = 1; i <= 5; i++) {
      expect(node.data).toBe(i)
      node = node.next
    }
  })

  it('has a method insertAfter to insert a new node after a paticular node', () => {
    const list = new LinkedList<number>([1, 2, 4])
    const node2 = list.head.next
    list.insertAfter(node2, 3)

    expect(list.length).toBe(4)

    let node = list.head
    for (const item of [1, 2, 3, 4]) {
      expect(node.data).toBe(item)
      node = node.next
    }
  })

  it('has a method to prepend nodes to the list', () => {
    const list = new LinkedList<number>([3, 4])
    expect(list.head.data).toBe(3)

    const items = [1, 2]
    list.unshift(...[1, 2])
    const iter = list.getIterator()

    for (const item of items) {
      expect(iter.next().value.data).toBe(item)
    }
  })

  it('can make an iterator to yields all nodes sequencialy', () => {
    const items = [1, 2, 3, 4, 5]
    const list = new LinkedList<number>(items)
    const iter = list.getIterator()

    for (const item of items) {
      const node = iter.next().value

      expect(node).not.toBeNull()
      expect(node).not.toBeUndefined()
      expect(node.data).toBe(item)
    }
    const last = iter.next()
    expect(last.done).toBeTruthy()
    expect(last.value).toBeNull()
  })

  it('can searh for a node by data as search key', () => {
    const nItems = [1, 2, 3, 4, 5]
    const nList = new LinkedList<number>(nItems)
    const nResult = nList.search(4)
    expect(nResult).not.toBeNull()
    expect(nResult.data).toBe(4)

    // search object
    const oItems = [{ a: 1 }, { a: { a: 1 } }]
    const oList = new LinkedList(oItems)

    let oResult = oList.search(oItems[0])
    expect(oResult).not.toBeNull()
    expect(equals(oResult.data, oItems[0])).toBeTruthy()

    oResult = oList.search(oItems[1])
    expect(oResult).not.toBeNull()
    expect(equals(oResult.data, oItems[1])).toBeTruthy()
  })

  it('returns null if searched item was not found in the list', () => {
    const items = [1, 2, 3, 4, 5]
    const list = new LinkedList<number>(items)
    expect(list.search(8)).toBeNull()
  })
})

describe('Data Structure: LinkedListNode', () => {
  it('throws error when new pointers are added from instance', () => {
    const node = new LinkedListNode<number>(2)
    expect(node.data).toBe(2)
    expect(node.next).toBeNull()
    // tslint:disable-next-line: no-string-literal
    expect(() => (node.pointers['a'] = node)).toThrowError()

    // tslint:disable-next-line: no-string-literal
    expect(() => (node['a'] = node)).toThrowError()
  })

  it('can compare for equality with other nodes', () => {
    const node1 = new LinkedListNode<number>(1)
    const node2 = new LinkedListNode<number>(1)
    expect(node1.equals(node2)).toBeTruthy()

    node1.next = node2
    expect(node1.equals(node2)).toBeFalsy()
  })
})
