export interface IDataNode<T, P = any> {
  readonly data: T
  pointers: P

  /**
   * Compares with a node for equality.
   *
   * @param node The which is to be compared.
   * @returns true if both nodes are equal otherwise false.
   */
  equals(node: any): boolean
}

export interface INodePointer<NODE> {
  [points: string]: NODE
}
