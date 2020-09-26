/**
 * Created by rengar on 2020/9/20.
 */
interface LLNode {
    element: any;
    next: LLNode;
    prev: LLNode;
}

/**
 * Node 链表节点
 * @param element 当前节点数据
 */
class LLNode {
    element: any;
    next: LLNode;
    prev: LLNode;
    
    constructor(element: any) {
        this.element = element
        this.next = null
        this.prev = null
    }
}

/**
 * 链表容器 -- 单向链表
 * @constructor
 */
class LList {
    head: LLNode;
    length: number;
    
    constructor() {
        const head = Symbol('head')
        this.head = new LLNode(head)
        this.length = 0
    }

    /**
     * 通过下标查找节点
     * @param element
     */
    indexOf(element: any) {
        let index = 0
        let currentNode = this.head.next
        while (currentNode && currentNode.element !== element) {
            currentNode = currentNode.next
            index++
        }
        return currentNode === null ? -1 : index
    }

    /**
     * 链表头部插入节点
     */
    unshift() {
        Array.prototype.forEach.call(arguments, (newElement: any) => {
            const newNode = new LLNode(newElement)
            // tips: 注意操作顺序
            newNode.next = this.head.next
            this.head.next = newNode
            this.length++
        })
        return this.length
    }

    /**
     * 链表头部删除节点
     */
    shift() {
        if (!this.head.next) return void 0
        const value = this.head.next.element
        this.head.next = this.head.next.next
        this.length--
        return value
    }

    /**
     * 链表尾部插入节点
     */
    push(newElement: any) {
        let index = 0
        let currentNode = this.head
        while(++index <= this.length) {
            currentNode = currentNode.next
        }
        currentNode.next = new LLNode(newElement)
        return ++this.length
    }

    /**
     * 链表尾部删除节点
     */
    pop() {
        let index = 0
        let currentNode = this.head.next
        while(++index < this.length) {
            currentNode = currentNode.next
        }
        const value = currentNode.next.element
        currentNode.next = null
        return value
    }

    /**
     * 截取字符串
     * @param start
     * @param end
     */
    slice(start: number, end: number) {

    }

    /**
     * 聚合操作
     */
    split() {}

    /**
     * 展示链表中的节点值
     */
    display() {
        let currentNode = this.head.next
        while (currentNode) {
            console.log('display:' + currentNode.element)
            currentNode = currentNode.next
        }
    }
}

export default LList