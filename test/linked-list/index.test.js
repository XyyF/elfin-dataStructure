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
})