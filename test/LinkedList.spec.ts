import { LinkedList } from '../src/index'

describe('LinkedList', () => {
  it('can initialize with an array', () => {
    const items = [1, 2, 3, 4, 5]
    const list = new LinkedList<number>(...items)
    expect(list.length).toBe(5)

    let cursor = list.head
    for (const item of items) {
      expect(cursor.data).toBe(item)
      cursor = cursor.next
    }
  })

  it('can make an iterator to yields all nodes sequencialy', () => {
    const items = [1, 2, 3, 4, 5]
    const list = new LinkedList<number>(...items)
    const iter = list.getIterator()

    for (const item of items) {
      const node = iter.next().value

      expect(node).not.toBeNull()
      expect(node).not.toBeUndefined()
      expect(node.data).toBe(item)
    }
  })
})
