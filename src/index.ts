/**
 * Created by rengar on 2020/9/20.
 */

import SinglySide from './linked-list/singly-side';
import SinglySideCycle from './linked-list/singly-side-cycle';
import DoubleSide from './linked-list/doule-side';
import DoubleSideCycle from './linked-list/doule-side-cycle';
import Lru from './LRU/index';

export const SSLList = SinglySide;
export const ElfinSSLList = SinglySide;

export const SSCLList = SinglySideCycle;
export const ElfinSSCLList = SinglySideCycle;

export const DSLList = DoubleSide;
export const ElfinDSLList = DoubleSide;

export const DSCLList = DoubleSideCycle;
export const ElfinDSCLList = DoubleSideCycle;

export const LRU = Lru;
export const ElfinLRU = Lru;

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
};
