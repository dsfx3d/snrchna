export interface IDataNode<T> {
  data: T

  /**
   * Compares with a node for equality.
   *
   * @param node The which is to be compared.
   * @returns true if both nodes are equal otherwise false.
   */
  equals(node: this): boolean
}
