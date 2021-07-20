/**
 * Created by rengar on 2020/9/20.
 */

import SinglySide from './linked-list/singly-side';
import SinglySideCycle from './linked-list/singly-side-cycle';
import DoubleSide from './linked-list/doule-side';
import DoubleSideCycle from './linked-list/doule-side-cycle';
import Lru from './LRU/index';
import stack from './stack/index';
import queue from './queue/index';

// 单向链表
export const SSLList = SinglySide;
export const ElfinSSLList = SinglySide;
// 单向循环链表
export const SSCLList = SinglySideCycle;
export const ElfinSSCLList = SinglySideCycle;
// 双向链表
export const DSLList = DoubleSide;
export const ElfinDSLList = DoubleSide;
// 双向循环链表
export const DSCLList = DoubleSideCycle;
export const ElfinDSCLList = DoubleSideCycle;

// LRU缓存
export const LRU = Lru;
export const ElfinLRU = Lru;

// 栈
export const Stack = stack;
export const ElfinStack = stack;

// 队列
export const Queue = queue;
export const ElfinQueue = queue;

export default {
  SSLList: SinglySide,
  ElfinSSLList: SinglySide,
  SSCLList: SinglySideCycle,
  ElfinSSCLList: SinglySideCycle,
  DSLList: DoubleSide,
  ElfinDSLList: DoubleSide,
  DSCLList: DoubleSideCycle,
  ElfinDSCLList: DoubleSideCycle,
  ElfinLRU: Lru,
  Stack,
  ElfinStack,
  Queue,
  ElfinQueue,
};
