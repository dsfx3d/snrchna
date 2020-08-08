import { IDataNode } from '../../types/IDataNode'

export class DataNode<T> implements IDataNode<T> {
  private _data: T
  private _pointer: Pointer<DataNode<T>>

  constructor(data: T, pointer: Pointer<DataNode<T>> = null) {
    this._data = data
    // tslint:disable-next-line: no-object-literal-type-assertion
    this._pointer = pointer || ({ next: null } as Pointer<DataNode<T>>)
  }

  get data(): T {
    return this._data
  }

  get pointer(): Pointer<DataNode<T>> {
    return this._pointer
  }

  set pointer(value: Pointer<DataNode<T>>) {
    this._pointer = value
  }
}

export interface Pointer<T> {
  next: T
}
