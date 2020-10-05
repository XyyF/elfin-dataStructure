/**
 * Created by rengar on 2020/10/4.
 */
import {LLNode, LLNodeInterface, LinkedList} from './index'

/**
 * 链表容器 -- 双向链表
 */
export default class DSLList extends LinkedList {
    /**
     * 使用head占位头节点
     */
    constructor() {
        super()
        // 双向链表特点
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    /**
     * 链表头部插入节点
     */
    unshift(): number {
        Array.prototype.forEach.call(arguments, (newElement: any) => {
            const newNode = new LLNode(newElement)
            // tips: 注意操作顺序
            const currentNextNode = this.head.next as LLNodeInterface
            currentNextNode.prev = newNode
            newNode.next = currentNextNode
            newNode.prev = this.head
            this.head.next = newNode
            this.length++
        })

        return this.length
    }

    /**
     * 链表头部删除节点
     */
    shift(): any {
        if (this.isEmpty()) return void 0
        // 如果length > 0，那么head之后是存在元素节点的
        // head - node2 - node1
        // head - node1
        // TODO
        const deleteNode = this.head.next as LLNodeInterface
        const nextNode = deleteNode.next as LLNodeInterface
        const value = deleteNode.element
        this.head.next = deleteNode.next
        deleteNode.next.prev
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
        currentNode.next = new LLNode(newElement)

        return ++this.length
    }

    /**
     * 链表尾部删除节点
     */
    pop() {
        if (this.isEmpty()) return void 0
        let index = 0
        let currentNode = this.head
        while(++index < this.length) {
            currentNode = currentNode.next as LLNodeInterface
        }
        if (currentNode === null) return void 0
        const tailNode = currentNode.next as LLNodeInterface
        currentNode.next = null
        this.length--
            
        return tailNode.element
    }

    /**
     * 将链表数据转化为数据结构
     */
    transToArray() {
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