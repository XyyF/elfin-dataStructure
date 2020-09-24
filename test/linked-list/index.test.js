import {ElfinLList} from '@/index'

describe('[LList] 单向链表', () => {
    const llist = new ElfinLList()

    it('实例func__push', () => {
        llist.push(1)
        expect(llist.length).toBe(1)
    })
})