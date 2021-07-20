import { Queue } from '@/dist/elfinDS';

describe('[Queue] 队列', () => {
  it('入队列', () => {
    const queue = new Queue();
    expect(queue.push('key1')).toEqual(1);
    expect(queue.push('key2')).toEqual(2);
    expect(queue.length).toEqual(2);
  })

  it('出队列', () => {
    const queue = new Queue();
    queue.push('key1');
    queue.push('key2');
    expect(queue.pop()).toEqual('key1');
    expect(queue.pop()).toEqual('key2');
    expect(queue.length).toEqual(0);
    expect(queue.pop()).toEqual(undefined);
    expect(queue.length).toEqual(0);
  })
})