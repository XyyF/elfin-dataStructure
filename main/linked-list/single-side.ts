/**
 * Created by rengar on 2020/9/20.
 */
import {LLNode, LLNodeInterface, LinkedList} from './index'

/**
 * 链表容器 -- 单向链表
 */
export default class SSLList extends LinkedList {
    constructor() {
        super()
    }
    /**
     * 通过下标查找节点
     */
    indexOf(element: any): number {
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
    unshift(): number {
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
    shift(): any {
        if (this.length === 0) return void 0
        // 如果length > 0，那么head之后是存在元素节点的
        const headNode = this.head.next as LLNodeInterface
        const value = headNode.element
        this.head.next = headNode.next
        this.length--

        return value
    }

    /**
     * 链表尾部插入节点
     */
    push(newElement: any): number {
        let index = 0
        let currentNode = this.head
        while(index < this.length) {
            currentNode = currentNode.next as LLNodeInterface
            index++
        }
        const newNode = new LLNode(newElement)
        newNode.next = this.tail
        currentNode.next = newNode

        return ++this.length
    }

    /**
     * 链表尾部删除节点
     */
    pop() {
        if (this.length === 0) return void 0
        let index = 0
        let currentNode = this.head.next
        while(++index < this.length && currentNode) {
            currentNode = currentNode.next as LLNodeInterface
        }
        if (currentNode === null) return void 0

        const value = currentNode.element
        currentNode.next = this.tail
        this.length--
            
        return value
    }

    /**
     * 是否包含某个元素
     */
    includes(element: any, index: number = 0): boolean {
        let currentIdx = 0
        let currentNode = this.head.next
        while(currentNode) {
            if (currentIdx >= index && currentNode.element === element) {
                return true
            }
            currentNode = currentNode.next
            currentIdx++
        }
        return false
    }

    /**
     * 将链表数据转化为数据结构
     */
    transLListToArray() {
        const arr = []
        let index = 0
        let currentNode = this.head
        while (index < this.length) {
            currentNode = currentNode.next as LLNodeInterface
            arr.push(currentNode.element)
            index++
        }
        return arr
    }
}