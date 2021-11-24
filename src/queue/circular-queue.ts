interface QueueInterface<T> {
  elements: T[];
  head: number;
  tail: number;
  length: number;
  push(value: T): boolean;
  pop(): boolean;
  Front(): T | number;
  Rear(): T | number;
  isEmpty(): boolean;
  isFull(): boolean;
}

export default class CircularQueue<T> implements QueueInterface<T> {
  // 节点列表
  elements: T[];
  head = 0;
  tail = 0;
  // 真实节点长度
  length = 0;

  constructor(length = 0) {
    this.elements = [];
    this.length = length + 1;
  }

  push(value: T) {
    if (this.isFull()) return false;
    this.elements[this.tail] = value;
    this.tail = (this.tail + 1) % this.length;
    return true;
  }

  pop() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.length;
    return true;
  }

  Front(): T | number {
    if (this.isEmpty()) return -1;
    return this.elements[this.head];
  }

  Rear(): T | number {
    if (this.isEmpty()) return -1;
    return this.elements[(this.tail - 1 + this.length) % this.length];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  isFull() {
    return (this.tail + 1) % this.length === this.head;
  }
}
