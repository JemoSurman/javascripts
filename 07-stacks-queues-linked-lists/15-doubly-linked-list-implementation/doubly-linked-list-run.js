const DoublyLinkedList = require('./doubly-linked-list');

const doublyList = new DoublyLinkedList();
// doublyList.prepend(4);
// doublyList.prepend(7);
// doublyList.prepend);
doublyList.append(6);
doublyList.append(0);
doublyList.append(10);
doublyList.append(8);
doublyList.append(1);
doublyList.append(5);
// doublyList.insertAt(4,"NEWNODE");
// console.log(doublyList.get(4));
console.log(doublyList.contains(7));
// doublyList.remove(0);
// doublyList.printAll();