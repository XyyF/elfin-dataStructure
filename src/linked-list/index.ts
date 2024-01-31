/**
 * Node 链表节点
 */
export class LLNode<T> {
  // 节点值
  element: T;
  // 后驱节点
  next: LLNodeInterface<any> | null = null;
  // 前驱节点
  prev: LLNodeInterface<any> | null = null;
    
  constructor(element: T) {
    this.element = element;
  }
}

export type LLNodeInterface<T> = LLNode<T>;
export abstract class LinkedList {
  // 虚拟头节点
  head: LLNodeInterface<symbol>;
  // 虚拟尾节点
  tail: LLNodeInterface<symbol>;
  // 真实节点长度
  length = 0;
    
  constructor() {
    const head = Symbol('head');
    this.head = new LLNode<symbol>(head);
    const tail = Symbol('tail');
    this.tail = new LLNode<symbol>(tail);
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
