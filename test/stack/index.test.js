import { Stack } from '@/dist/elfinDS';

describe('[Stack] 栈', () => {
  it('入栈', () => {
    const stack = new Stack();
    expect(stack.push('key1')).toEqual(1);
    expect(stack.push('key2')).toEqual(2);
    expect(stack.length).toEqual(2);
  })

  it('出栈', () => {
    const stack = new Stack();
    stack.push('key1');
    stack.push('key2');
    expect(stack.pop()).toEqual('key2');
    expect(stack.pop()).toEqual('key1');
    expect(stack.length).toEqual(0);
    expect(stack.pop()).toEqual(undefined);
    expect(stack.length).toEqual(0);
  })
})