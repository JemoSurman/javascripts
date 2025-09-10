const DoublyLinkedList = require('./doubly-linked-list');

const doublyList = new DoublyLinkedList();
doublyList.prepend(4);
doublyList.prepend(7);
doublyList.prepend(3);
doublyList.prepend(6);
doublyList.prepend(0);
doublyList.prepend(10);
doublyList.prepend(8);
doublyList.prepend(1);
doublyList.prepend(5);
doublyList.insertAt(4,"NEWNODE");

doublyList.printAll();