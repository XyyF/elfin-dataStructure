/**
 * Created by rengar on 2020/9/24.
 */

function transLListToArray(LListInstance) {
    const arr = []
    let currentNode = LListInstance.head.next
    while (currentNode) {
        arr.push(currentNode.element)
        currentNode = currentNode.next
    }
    return arr
}

export default {
    transLListToArray,
}