/**
 * Created by rengar on 2020/9/20.
 */

import SingleSide from './linked-list/single-side'
import SingleSideCycle from './linked-list/signle-side-cycle'
import DoubleSide from './linked-list/doule-side'

export const SSLList = SingleSide
export const ElfinSSLList = SingleSide

export const SSCLList = SingleSideCycle
export const ElfinSSCLList = SingleSideCycle

export const DSLList = DoubleSide
export const ElfinDSLList = DoubleSide

export default {
    SSLList: SingleSide,
    ElfinSSLList: SingleSide,
    SSCLList: SingleSideCycle,
    ElfinSSCLList: SingleSideCycle,
    DSLList: DoubleSide,
    ElfinDSLList: DoubleSide,
}