/**
 * Compare the parameters for equality.
 *
 * @param {any} a
 * @param {any} b
 * @returns true if 'a' and 'b' are equal otherwise false
 */
export function equals(a: any, b: any): boolean {
  if (typeof a !== typeof b) {
    return false
  }

  if (typeof a === 'object') {
    if (a === b) {
      return true
    }
    if (Array.isArray(a)) {
      if (a.length !== b.length) {
        return false
      }

      for (let i = 0; i < a.length; i++) {
        if (!equals(a[i], b[i])) {
          return false
        }
      }
    } else {
      const aEntries = Object.entries(a)
      const bEntries = Object.entries(b)

      if (aEntries.length !== bEntries.length) {
        return false
      }

      for (const [key, value] of aEntries) {
        if (!equals(value, b[key])) {
          return false
        }
      }
    }

    return true
  }

  return a === b
}
