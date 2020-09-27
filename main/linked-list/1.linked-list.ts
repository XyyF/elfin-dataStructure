/**
 * Created by rengar on 2020/9/20.
 */
interface LLNodeInterface {
    element: any;
    next: LLNodeInterface | null;
    prev: LLNodeInterface | null;
}

/**
 * Node 链表节点
 * @param element 当前节点数据
 */
class LLNode implements LLNodeInterface {
    element: any;
    next: LLNodeInterface | null = null;
    prev: LLNodeInterface | null = null;
    
    constructor(element: any) {
        this.element = element
    }
}

/**
 * 链表容器 -- 单向链表
 */
class LList {
    head: LLNodeInterface;
    length: number = 0;
    
    constructor() {
        const head = Symbol('head')
        this.head = new LLNode(head)
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
        while(currentNode && currentNode.next) {
            currentNode = currentNode.next
            index++
        }
        currentNode.next = new LLNode(newElement)
        return ++this.length
    }

    /**
     * 链表尾部删除节点
     */
    pop() {
        // TODO 逻辑处理
        // let index = 0
        // let currentNode = this.head.next
        // while(++index < this.length) {
        //     currentNode = currentNode.next
        // }
        // if (!currentNode) return void 0
        // const value = currentNode.next.element
        // currentNode.next = null
        // return value
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