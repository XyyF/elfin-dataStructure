interface QueueInterface<T> {
  elements: T[];
  length: number;
  push(value: T): number;
  pop(): T | undefined;
}

export default class Queue<T> implements QueueInterface<T> {
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
    return this.elements.shift();
  }

  top(): T | undefined {
    if (this.isEmpty()) {
      return void 0;
    }
    return this.elements[this.length - 1];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
};
