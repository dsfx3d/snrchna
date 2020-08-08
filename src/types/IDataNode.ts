export interface IDataNode<T, P = any> {
  readonly data: T
  pointer: P
  [key: string]: any
}
