const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
    const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const queue = new Queue();
    const stack = new Stack();
    
    
    for(let i = 0; i < formattedStr.length; i++){
        stack.push(formattedStr[i]);
        queue.enqueue(formattedStr[i])
    }

    for(let i = 0; i < formattedStr.length; i++){
        if(stack.pop() !== queue.dequeue()){
            return false;
        }
    }
    
    return true;
}

module.exports = isPalindromeQueueStack;
