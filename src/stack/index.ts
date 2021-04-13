interface StackInterface<T> {
  elements: T[];
  length: number;
  push(value: T): number;
  pop(): T | undefined;
}

export default class Stack<T> implements StackInterface<T> {
  // 节点列表
  elements: T[];
  // 真实节点长度
  length = 0;
  
  constructor() {
    this.elements = [];
    this.length = 0;
  }

  push(value: T): number {
    this.length++;
    return this.elements.push(value);
  }

  pop(): T | undefined {
    if (this.length > 0) {
      --this.length;
    }
    return this.elements.pop();
  }
};
