import {LRU} from '@/dist/elfinDS'

describe('[LRU] LRU缓存', () => {
    describe('实例func', () => {
        let lru = null

        it('赋值取值操作', () => {
            lru = new LRU()
            lru.set('key1', 'value1')
            expect(lru.get('key1')).toEqual('value1')
            lru.set('key2', 'value2')
            expect(lru.get('key2')).toEqual('value2')
        })

        it('cap容量', () => {
            lru = new LRU(2)
            lru.set('key1', 'value1')
            lru.set('key2', 'value2')
            expect(lru.get('key1')).toEqual('value1')
            lru.set('key3', 'value3')
            expect(lru.get('key1')).toEqual('value1')
            lru.set('key4', 'value4')
            expect(lru.get('key2')).toEqual(undefined)
        })
    })
})