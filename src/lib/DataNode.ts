import { IDataNode } from '../types/IDataNode'
import { equals } from '../utils/equals'

export class DataNode<T, P = any> implements IDataNode<T, P> {
  protected _data: T
  protected _pointers: P

  constructor(data: T) {
    this._data = data
    this._pointers = ({} as unknown) as P
  }

  get data(): T {
    return this._data
  }

  public get pointers(): P {
    return (new Proxy(
      (this._pointers as unknown) as object,
      pointerProxyHandler
    ) as unknown) as P
  }

  /**
   * Compares with a node for equality.
   *
   * @param node The which is to be compared.
   * @returns true if both nodes are equal otherwise false.
   */
  equals(node: any): boolean {
    return equals(this, node)
  }
}

const pointerProxyHandler = {
  set(_target: any, prop: any, _receiver: any) {
    throw new Error(`property ${String(prop)} cannot be set.`)
  }
}
