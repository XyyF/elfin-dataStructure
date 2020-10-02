export interface LLNodeInterface {
    element: any;
    next: LLNodeInterface | null;
    prev: LLNodeInterface | null;
}

/**
 * Node 链表节点
 * @param element 当前节点数据
 */
export class LLNode implements LLNodeInterface {
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

export class LinkedList {
    // 头节点
    head: LLNodeInterface;
    // 尾节点
    tail: LLNodeInterface;
    // 真实节点长度
    length: number = 0;
    
    constructor() {
        const head = Symbol('head')
        this.head = new LLNode(head)
        const tail = Symbol('tail')
        this.tail = new LLNode(tail)
    }
}