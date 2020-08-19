export function getProp(
  obj: any,
  path: string,
  // tslint:disable-next-line: no-unnecessary-initializer
  fallback: any = undefined
) {
  if (typeof obj !== 'object') {
    throw new Error('obj must be an object')
  }

  const segments = path.split('.')

  for (const [i, segment] of segments.entries()) {
    if (typeof obj !== 'object') {
      if (i < segments.length - 1) {
        return fallback
      } else {
        return obj
      }
    }
    if (segment in obj) {
      obj = obj[segment]
    }
  }
}
