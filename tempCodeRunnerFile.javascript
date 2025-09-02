class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        const node = new Node(data);

        if(this.head === null){
            this.head = node;
        }else{
            this.tail.next = node;
        }

        this.tail = node;
    }

    get(index){
        let current = this.head;
        let i = 0;

        while(i < index){
            current = current.next;
            i++;
        }

        return current;
    }

    printAll(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(3);
list.add(4);

console.log(list.get(2));
// list.printAll();