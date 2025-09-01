const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    const queue = new Queue();

    for(let i = str.length - 1; i >= 0; i--){
        queue.enqueue(str[i]);
    }

    let reservedString = '';
    
    for(let i = 0; i < str.length; i++){
        reservedString += queue.peek();
        queue.dequeue();
    }
    return reservedString;

};

module.exports = reverseStringWithQueue;
