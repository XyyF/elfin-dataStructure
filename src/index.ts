/**
 * Created by rengar on 2020/9/20.
 */

import SingleSide from './linked-list/single-side'
import SingleSideCycle from './linked-list/signle-side-cycle'
import DoubleSide from './linked-list/doule-side'
import DoubleSideCycle from './linked-list/doule-side-cycle'

export const SSLList = SingleSide
export const ElfinSSLList = SingleSide

export const SSCLList = SingleSideCycle
export const ElfinSSCLList = SingleSideCycle

export const DSLList = DoubleSide
export const ElfinDSLList = DoubleSide

export const DSCLList = DoubleSideCycle
export const ElfinDSCLList = DoubleSideCycle

export default {
    SSLList: SingleSide,
    ElfinSSLList: SingleSide,
    SSCLList: SingleSideCycle,
    ElfinSSCLList: SingleSideCycle,
    DSLList: DoubleSide,
    ElfinDSLList: DoubleSide,
    DSCLList: DoubleSideCycle,
    ElfinDSCLList: DoubleSideCycle,
}