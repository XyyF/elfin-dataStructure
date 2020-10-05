/**
 * Node 链表节点
 */
export class LLNode {
    // 节点值
    element: any;
    // 后驱节点
    next: LLNodeInterface | null = null;
    // 前驱节点
    prev: LLNodeInterface | null = null;
    
    constructor(element: any) {
        this.element = element
    }
}

export interface LLNodeInterface extends LLNode {}
export abstract class LinkedList {
    // 虚拟头节点
    head: LLNodeInterface;
    // 虚拟尾节点
    tail: LLNodeInterface;
    // 真实节点长度
    length: number = 0;
    
    constructor() {
        const head = Symbol('head')
        this.head = new LLNode(head)
        const tail = Symbol('tail')
        this.tail = new LLNode(tail)
    }

    isEmpty(): boolean {
        return this.length === 0
    }
}