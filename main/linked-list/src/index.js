/**
 * Created by rengar on 2020/9/20.
 */
/**
 * Node 链表节点
 * @param element 当前节点数据
 */
function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
}

/**
 * 链表容器 -- 单向链表
 * @constructor
 */
function LList() {
    const head = Symbol('head')
    this.head = new Node(head)
    this.findNode = findNode
    this.insert = insert
    this.display = display
}

/**
 * 通过节点数据查找节点
 * @param element
 */
function findNode(element) {
    let currentNode = this.head.next
    while (currentNode && currentNode.element !== element) {
        currentNode = currentNode.next
    }
    return currentNode
}

/**
 * 链表后驱插入节点
 * @param newElement
 * @param oldElement 旧节点
 */
function insert(newElement, oldElement) {
    const oldNode = this.findNode(oldElement)
    const newNode = new Node(newElement)
    // tips: 注意操作顺序
    newNode.next = oldNode.next
    oldNode.next = newNode
}

/**
 * 展示链表中的节点值
 */
function display() {
    let currentNode = this.head.next
    while (currentNode) {
        console.log('display:' + currentNode.element)
        currentNode = currentNode.next
    }
}