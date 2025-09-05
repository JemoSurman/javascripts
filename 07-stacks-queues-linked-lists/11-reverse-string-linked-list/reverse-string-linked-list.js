const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
    const list = new LinkedList();

    for(let i = 0; i < str.length; i++){
        list.add(str[i]);
    }

    let reversedString = '';

    for(let i = str.length - 1; i >= 0; i--){
        reversedString += list.get(i);
    }

    return reversedString;
}

module.exports = reverseStringLinkedList;
