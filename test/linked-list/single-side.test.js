import {SSLList} from '@/build/bundle'

describe('[SSLList] 单向链表', () => {
    describe('实例func__push', () => {
        let llist = null

        beforeEach(() => {
            llist = new SSLList()
        })

        it('push', () => {
            // 行为
            llist.push(1)
            // 链表属性 - 长度、尾节点元素、尾节点后驱指针
            expect(llist.length).toBe(1)
            expect(llist.head.next.element).toBe(1)
            expect(llist.head.next.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray(llist)).toEqual([1])

            // 行为
            llist.push(2)
            // 链表属性 - 长度、尾节点元素、尾节点后驱指针
            expect(llist.length).toBe(2)
            expect(llist.head.next.next.element).toBe(2)
            expect(llist.head.next.next.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([1, 2])
        })
    })

    describe('实例func__pop', () => {
        let llist = null

        beforeEach(() => {
            llist = new SSLList()
        })

        it('pop', () => {
            llist.push(1)
            llist.push(2)

            // 行为
            expect(llist.pop()).toBe(2)
            // 链表属性 - 长度、尾节点元素、尾节点后驱指针
            expect(llist.length).toBe(1)
            expect(llist.head.next.element).toBe(1)
            expect(llist.head.next.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray(llist)).toEqual([1])

            // 行为
            expect(llist.pop()).toBe(1)
            // 链表属性 - 长度、无尾节点
            expect(llist.length).toBe(0)
            expect(llist.head.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray(llist)).toEqual([])

            // 行为
            expect(llist.pop()).toBe(undefined)
            // 链表属性 - 长度、无尾节点
            expect(llist.length).toBe(0)
            expect(llist.head.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([])
        })
    })

    describe('实例func__unshift', () => {
        let llist = null

        beforeEach(() => {
            llist = new SSLList()
        })

        it('unshift', () => {
            // 行为
            llist.unshift(1)
            // 链表属性 - 长度、尾节点元素、尾节点后驱指针
            expect(llist.length).toBe(1)
            expect(llist.head.next.element).toBe(1)
            expect(llist.head.next.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([1])

            // 行为
            llist.unshift(2)
            // 链表属性 - 长度、尾节点元素、尾节点后驱指针
            expect(llist.length).toBe(2)
            expect(llist.head.next.next.element).toBe(1)
            expect(llist.head.next.next.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([2, 1])
        })
    })

    describe('实例func__shift', () => {
        let llist = null

        beforeEach(() => {
            llist = new SSLList()
        })

        it('shift', () => {
            llist.unshift(1)
            llist.unshift(2)

            // 行为
            expect(llist.shift()).toBe(2)
            // 链表属性 - 长度、尾节点元素、尾节点后驱指针
            expect(llist.length).toBe(1)
            expect(llist.head.next.element).toBe(1)
            expect(llist.head.next.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([1])

            // 行为
            expect(llist.shift()).toBe(1)
            // 链表属性 - 长度、无尾节点
            expect(llist.length).toBe(0)
            expect(llist.head.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([])

            // 行为
            expect(llist.shift()).toBe(undefined)
            // 链表属性 - 长度、无尾节点
            expect(llist.length).toBe(0)
            expect(llist.head.next).toBe(null)
            // 转化为数组
            expect(llist.transToArray()).toEqual([])
        })
    })
})