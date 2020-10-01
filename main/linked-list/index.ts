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
    element: any;
    next: LLNodeInterface | null = null;
    prev: LLNodeInterface | null = null;
    
    constructor(element: any) {
        this.element = element
    }
}

class LinkedList {
    constructor() {}
}