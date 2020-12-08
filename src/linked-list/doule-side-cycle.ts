/**
 * Created by rengar on 2020/10/7.
 */
import {LLNode, LLNodeInterface, LinkedList} from './index';

/**
 * 链表容器 -- 双向循环链表
 */
export default class DSCLList<T> extends LinkedList {
  /**
     * 使用head占位头节点
     * 使用tail占位尾节点
     */
  constructor() {
    super();
    // 双向循环链表特点
    this.head.next = this.tail;
    this.head.prev = this.tail;
    this.tail.prev = this.head;
    this.tail.next = this.head;
  }

  /**
     * 链表头部插入节点
     */
  unshift(): number {
    Array.prototype.forEach.call(arguments, (newElement: T) => {
      const newNode = new LLNode<T>(newElement);
      // head - node1 - tail
      // head - node2 - node1 - tail 
      // tips: 注意操作顺序
      const currentNextNode = this.head.next as LLNodeInterface<T>;
      currentNextNode.prev = newNode;
      newNode.next = currentNextNode;
      newNode.prev = this.head;
      this.head.next = newNode;
      this.length++;
    });

    return this.length;
  }

  /**
     * 链表头部删除节点
     */
  shift(): T | void {
    if (this.isEmpty()) return void 0;
    // 如果length > 0，那么head之后是存在元素节点的
    // head - node2 - node1 - tail
    // head - node1 - tail
    // 要删除的节点
    const deleteNode = this.head.next as LLNodeInterface<T>;
    // 要删除节点之后的节点
    const nextDeleteNode = deleteNode.next as LLNodeInterface<T>; 
    this.head.next = nextDeleteNode;
    nextDeleteNode.prev = this.head;
    this.length--;

    return deleteNode.element;
  }

  /**
     * 链表尾部插入节点
     */
  push(newElement: T): number {
    // 尾节点
    const tailNode = this.tail.prev as LLNodeInterface<T>;
    // head - node1 - tail
    // head - node1 - node2 - tail
    const newNode = new LLNode(newElement);
    tailNode.next = newNode;
    newNode.prev = tailNode;
    newNode.next = this.tail;
    this.tail.prev = newNode;

    return ++this.length;
  }

  /**
     * 链表尾部删除节点
     */
  pop(): T | void {
    if (this.isEmpty()) return void 0;
    const tailNode = this.tail.prev as LLNodeInterface<T>;
    const prevTailNode = tailNode.prev as LLNodeInterface<T>;
    // head - node1 - node2 - tail
    // head - node1 - tail
    prevTailNode.next = this.tail;
    this.tail.prev = prevTailNode;
    this.length--;
            
    return tailNode.element;
  }

  /**
     * 将链表数据转化为数据结构
     */
  transToArray(): T[] {
    const arr: T[] = [];
    let index = 0;
    let currentNode = this.head as LLNodeInterface<any>;
    while (index < this.length) {
      currentNode = currentNode.next as LLNodeInterface<T>;
      arr.push(currentNode.element);
      index++;
    }
    return arr;
  }
}