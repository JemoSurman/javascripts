const HashTable = require('./HashTable');

function anagramGrouping(words) {
    const anagramGrouping = new HashTable();

    for(const word of words){
        const sortedChars = word.split('').sort().join('');

        if(anagramGrouping.get(sortedChars)){
            anagramGrouping.get(sortedChars).push(word);
        }else {
            anagramGrouping.set(sortedChars, [word]);
        }
    }
    return anagramGrouping.getValues();
}

module.exports = anagramGrouping;
