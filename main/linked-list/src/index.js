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
 * 链表容器
 * @constructor
 */
function LList() {
    const head = Symbol('head')
    this.head = new Node(head)
}