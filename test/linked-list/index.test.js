import {ElfinLList} from '@/build/bundle'

import helper from './__utils'

describe('[LList] 单向链表', () => {
    const llist = new ElfinLList()

    it('实例func__push', () => {
        llist.push(1)
        expect(llist.length).toBe(1)
        const headNode = llist.head
        expect(headNode.next.element).toBe(1)
        expect(helper.transLListToArray(llist)).toEqual([1])
    })

    describe('实例func__includes', () => {
        let llistByIncludes = null

        beforeEach(() => {
            llistByIncludes = new ElfinLList()
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
    })
})