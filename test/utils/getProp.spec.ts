import { getProp } from '../../src/utils/getProp'
describe('util: getProp', () => {
  it('throws error if first argument is not an object', () => {
    expect(() => getProp(1, 'a')).toThrow(Error)
  })

  it('returns the value of prop if path exists', () => {
    const obj = { a: { b: 3 } }
    expect(getProp(obj, 'a.b')).toBe(obj.a.b)
  })
})
