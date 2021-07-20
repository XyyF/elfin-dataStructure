import { CircularQueue } from '@/dist/elfinDS';

describe('[CircularQueue] 循环队列', () => {
  it('测试操作', () => {
    const queue = new CircularQueue(3);
    expect(queue.push(1)).toEqual(true);
    expect(queue.push(2)).toEqual(true);
    expect(queue.push(3)).toEqual(true);
    expect(queue.push(4)).toEqual(false);
    expect(queue.Rear()).toEqual(3);
    expect(queue.isFull()).toEqual(true);
    expect(queue.pop()).toEqual(true);
    expect(queue.push(4)).toEqual(true);
    expect(queue.Rear()).toEqual(4);
  })
})