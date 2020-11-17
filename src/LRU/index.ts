import {LinkedList, LLNode} from '../linked-list/index'

class LRUNode<T> extends LLNode<T> {
  key: string;
  
  constructor(key: string, element: T) {
    super(element)
    this.key = key
  }
}

interface LLNodeInterface<T> extends LLNode<T> {
  key?: string;
}

class DSLList<T> extends LinkedList {
  /**
   * 使用head占位头节点
   * 使用tail占位尾节点
   */
  constructor() {
      super()
      // 双向链表特点
      this.head.next = this.tail
      this.tail.prev = this.head
  }

  /**
   * 链表头部删除节点
   */
  shift(): T | void {
      if (this.isEmpty()) return void 0
      // 如果length > 0，那么head之后是存在元素节点的
      // head - node2 - node1 - tail
      // head - node1 - tail
      // 要删除的节点
      const deleteNode = this.head.next as LLNodeInterface<T>
      // 要删除节点之后的节点
      const nextDeleteNode = deleteNode.next as LLNodeInterface<T> 
      this.head.next = nextDeleteNode
      nextDeleteNode.prev = this.head
      this.length--

      return deleteNode.element
  }

  /**
   * 链表尾部插入节点
   */
  push(key: string, newElement: T): number {
      // 尾节点
      const tailNode = this.tail.prev as LLNodeInterface<T>
      // head - node1 - tail
      // head - node1 - node2 - tail
      const newNode = new LRUNode(key, newElement)
      tailNode.next = newNode
      newNode.prev = tailNode
      newNode.next = this.tail
      this.tail.prev = newNode

      return ++this.length
  }

  /**
   * 删除节点自身
   */
  delete(node: LRUNode<T>): number {
      const preItemNode = node.prev as LRUNode<T>
      const nextItemNode = node.next as LRUNode<T>
      preItemNode.next = nextItemNode
      nextItemNode.prev = preItemNode

      return this.length
  }
}

interface LRUInterface<T> {
  cap: number;
  cache: Cache<T>;
  linkList: DSLList<T>;
}

interface Cache<T> {
  [prop: string]: LLNodeInterface<T>
}

export class LRU<T> implements LRUInterface<T> {
  cap = 100;
  cache = {} as Cache<T>;
  linkList = new DSLList<T>();

  constructor(cap: number = 100) {
    this.cap = cap
  }

  set(key: string, value: T) {
    // 更新使用时间
    this.linkList.push(key, value)
    this.cache[key] = this.linkList.tail.prev as LRUNode<T>

    if (this.cap <= 0) {
      // 需要弹出元素
      const element = this.linkList.shift()

    }
  }

  get(key: string): T {
    const item = this.cache[key] as LRUNode<T>
    // 如果存在节点的话，更新节点的使用时间
    if (item) {
      this.linkList.delete(item)
      this.linkList.push(key, item.element)
      this.cache[key] = this.linkList.tail.prev as LRUNode<T>
    }
    return item && item.element
  }
}