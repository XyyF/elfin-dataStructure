/**
 * Created by rengar on 2020/10/2.
 */
import {LLNode, LLNodeInterface, LinkedList} from './index'

/**
 * 链表容器 -- 单向循环链表
 */
export default class SSCLList<T> extends LinkedList<T> {
    /**
     * 使用head占位头节点
     * 使用tail占位尾节点
     */
    constructor() {
        super()
        // 循环链表特点
        this.head.next = this.tail
        this.tail.next = this.head
    }

    /**
     * 链表头部插入节点
     */
    unshift(): number {
        Array.prototype.forEach.call(arguments, (newElement: T) => {
            const newNode = new LLNode<T>(newElement)
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
    shift(): T | void {
        if (this.isEmpty()) return void 0
        const nextNode = this.head.next as LLNodeInterface<T>
        const value = nextNode.element
        this.head.next = nextNode.next
        this.length--
        return value
    }

    /**
     * 链表尾部插入节点
     */
    push(newElement: T): number {
        let index = 0
        let currentNode = this.head as LLNodeInterface<any>
        while(index < this.length) {
            currentNode = currentNode.next as LLNodeInterface<T>
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
    pop(): T | void {
        if (this.isEmpty()) return void 0
        let index = 0
        let currentNode = this.head as LLNodeInterface<any>
        while(++index < this.length) {
            currentNode = currentNode.next as LLNodeInterface<T>
        }
        if (currentNode === null) return void 0

        const tailNode = currentNode.next as LLNodeInterface<T>
        currentNode.next = this.tail
        this.length--

        return tailNode.element
    }

    /**
     * 将链表数据转化为数据结构
     */
    transToArray(): T[] {
        const arr = []
        let index = 0
        let currentNode = this.head as LLNodeInterface<any>
        while (index < this.length) {
            currentNode = currentNode.next as LLNodeInterface<T>
            arr.push(currentNode.element)
            index++
        }
        return arr
    }
}