/**
 * Created by rengar on 2020/9/20.
 */
import {LLNode, LLNodeInterface} from './index'

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
        if (!this.head.next) return void 0
        const value = this.head.next.element
        this.head.next = this.head.next.next
        this.length--
        return value
    }

    /**
     * 链表尾部插入节点
     */
    push(newElement: any): number {
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
        if (this.length === 0) return void 0
        let index = 0
        let currentNode = <LLNodeInterface | null>this.head
        while(++index < this.length && currentNode) {
            currentNode = currentNode.next
        }
        if (currentNode && currentNode.next) {
            const value = currentNode.next.element
            currentNode.next = null
            this.length--
            return value
        }
        return void 0
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