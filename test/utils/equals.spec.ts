import { equals } from '../../src/utils/equals'

describe('util test case: equals', () => {
  it('can compare primitive types', () => {
    // equal ints
    expect(equals(0, 0)).toBeTruthy()
    // unequal ints
    expect(equals(0, 1)).toBeFalsy()
    // equal floats
    expect(equals(0.1, 0.1)).toBeTruthy()
    // unequal floats
    expect(equals(0.1, 0.12)).toBeFalsy()
    // equal int + float
    expect(equals(9991, 9991.0)).toBeTruthy()
    // unequal int + float
    expect(equals(9991, 9991.01)).toBeFalsy()

    // equal strings
    expect(equals('a', 'a')).toBeTruthy()
    // unequal strings
    expect(equals('a', 'aa')).toBeFalsy()
    // string + int
    expect(equals('1', 1)).toBeFalsy()
    // string + float
    expect(equals('1', 1.0)).toBeFalsy()
    expect(equals('1.0', 1.0)).toBeFalsy()
  })

  it('can compare objects', () => {
    const a = { a: 1 }
    const b = { a: 1 }
    const c = { c: 1 }
    const d = { a: 1, d: 10 }
    const adeep = { a: { a: 1, o: { a: { a: 1 } } } }
    const bdeep = { a: { a: 1, o: { a: { a: 1 } } } }
    const cdeep = { a: { a: 1, o: { a: { c: 1 } } } }
    const ddeep = { a: { a: 1, o: { a: { a: 1, d: 10 } } } }

    expect(equals(a, a)).toBeTruthy()
    expect(equals(a, b)).toBeTruthy()
    expect(equals(a, c)).toBeFalsy()
    expect(equals(a, d)).toBeFalsy()
    expect(equals(a, adeep)).toBeFalsy()
    expect(equals(adeep, adeep)).toBeTruthy()
    expect(equals(adeep, bdeep)).toBeTruthy()
    expect(equals(adeep, cdeep)).toBeFalsy()
    expect(equals(adeep, ddeep)).toBeFalsy()
  })

  it('can compare arrays', () => {
    const a = [1, 2, 3]
    const b = [1, 2, 3]
    const c = [1, 3, 2]
    const d = [1, 3, 1]

    expect(equals(a, a)).toBeTruthy()
    expect(equals(a, b)).toBeTruthy()
    expect(equals(a, c)).toBeFalsy()
    expect(equals(a, d)).toBeFalsy()

    const ah = [1, { a: 1 }, 'abc']
    const bh = [1, { a: 1 }, 'abc']
    const ch = [{ a: 1 }, 1, 'abc']
    const dh = [1, { d: 1 }, 'abc']
    const eh = [1, { a: 1 }, 'abc', 4.99]

    expect(equals(ah, ah)).toBeTruthy()
    expect(equals(ah, bh)).toBeTruthy()
    expect(equals(ah, ch)).toBeFalsy()
    expect(equals(ah, dh)).toBeFalsy()
    expect(equals(ah, eh)).toBeFalsy()
  })
})
