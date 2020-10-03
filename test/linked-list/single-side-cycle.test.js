import {SSCLList} from '@/build/bundle'

describe('[SSCLList] 单向循环链表', () => {
    const llist = new SSCLList()

    describe('实例func__push', () => {
        let llistByPush = null

        beforeEach(() => {
            llistByPush = new SSCLList()
        })

        it('push', () => {
            llistByPush.push(1)
            expect(llistByPush.length).toBe(1)
            expect(llistByPush.head.next.element).toBe(1)
            expect(llistByPush.transToArray(llistByPush)).toEqual([1])

            llistByPush.push(2)
            expect(llistByPush.length).toBe(2)
            expect(llistByPush.transToArray(llistByPush)).toEqual([1, 2])
        })
    })

    describe('实例func__pop', () => {
        let llistByPop = null

        beforeEach(() => {
            llistByPop = new SSCLList()
        })

        it('pop', () => {
            llistByPop.push(1)
            llistByPop.push(2)

            expect(llistByPop.pop()).toBe(2)
            expect(llistByPop.length).toBe(1)
            expect(llistByPop.transToArray(llistByPop)).toEqual([1])

            expect(llistByPop.pop()).toBe(1)
            expect(llistByPop.length).toBe(0)
            expect(llistByPop.transToArray(llistByPop)).toEqual([])

            expect(llistByPop.pop()).toBe(undefined)
            expect(llistByPop.length).toBe(0)
            expect(llistByPop.transToArray(llistByPop)).toEqual([])
        })
    })

    describe('实例func__unshift', () => {
        let llistByUnshift = null

        beforeEach(() => {
            llistByUnshift = new SSCLList()
        })

        it('unshift', () => {
            llistByUnshift.unshift(1)
            expect(llistByUnshift.length).toBe(1)
            expect(llistByUnshift.head.next.element).toBe(1)
            expect(llistByUnshift.transToArray(llistByUnshift)).toEqual([1])

            llistByUnshift.unshift(2)
            expect(llistByUnshift.length).toBe(2)
            expect(llistByUnshift.transToArray(llistByUnshift)).toEqual([2, 1])
        })
    })

    describe('实例func__shift', () => {
        let llistByShift = null

        beforeEach(() => {
            llistByShift = new SSCLList()
        })

        it('shift', () => {
            llistByShift.unshift(1)
            llistByShift.unshift(2)

            expect(llistByShift.shift()).toBe(2)
            expect(llistByShift.length).toBe(1)
            expect(llistByShift.transToArray(llistByShift)).toEqual([1])

            expect(llistByShift.shift()).toBe(1)
            expect(llistByShift.length).toBe(0)
            expect(llistByShift.transToArray(llistByShift)).toEqual([])

            expect(llistByShift.shift()).toBe(undefined)
            expect(llistByShift.length).toBe(0)
            expect(llistByShift.transToArray(llistByShift)).toEqual([])
        })
    })
})