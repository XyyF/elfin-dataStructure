import {ElfinSignleSideLList} from '@/build/bundle'

describe('[ElfinSignleSideLList] 单向链表', () => {
    const llist = new ElfinSignleSideLList()

    describe('实例func__push', () => {
        let llistByPush = null

        beforeEach(() => {
            llistByPush = new ElfinSignleSideLList()
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
            llistByPop = new ElfinSignleSideLList()
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
            llistByUnshift = new ElfinSignleSideLList()
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
            llistByShift = new ElfinSignleSideLList()
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

    describe('实例func__includes', () => {
        let llistByIncludes = null

        beforeEach(() => {
            llistByIncludes = new ElfinSignleSideLList()
        })

        it('空链表', () => {
            expect(llistByIncludes.includes(1)).toBe(false)
            expect(llistByIncludes.includes('1')).toBe(false)
        })

        it('链表_number', () => {
            llistByIncludes.push(1)
            expect(llistByIncludes.includes(1)).toBe(true)
            expect(llistByIncludes.includes(2)).toBe(false)
        })

        it('链表_string', () => {
            llistByIncludes.push('1')
            expect(llistByIncludes.includes('1')).toBe(true)
            expect(llistByIncludes.includes('2')).toBe(false)
        })

        it('下标', () => {
            llistByIncludes.push(1)
            expect(llistByIncludes.includes(1, 1)).toBe(false)
            llistByIncludes.push(2)
            expect(llistByIncludes.includes(2, 1)).toBe(true)
        })
    })
})