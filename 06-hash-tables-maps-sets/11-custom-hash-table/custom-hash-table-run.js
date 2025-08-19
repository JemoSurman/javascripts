const HashTable = require('./custom-hash-table');

const myHashTable = new HashTable();

const result = myHashTable._hash('John',myHashTable.limit);

//console.log(result);

myHashTable.set('John','555-321-568');
myHashTable.set('Jane', '555-121-788');
myHashTable.set('Sara', '555-482-923');


//console.log(myHashTable.get('John'));
myHashTable.remove('Jane');
// myHashTable.printTable();
console.log(myHashTable.has('Jane'));
console.log(myHashTable.has('Sara'));