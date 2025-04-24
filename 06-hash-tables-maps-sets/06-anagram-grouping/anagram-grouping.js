function anagramGrouping(words) {
    const anagramGroups = new Map();

    for(const word of words){
        const sortedChars = word.split('').sort().join('');
        
        if(!anagramGroups.has(sortedChars)){
            anagramGroups.set(sortedChars, [word]);
        }else {
            anagramGroups.get(sortedChars).push(word);
        } 
    }

    return Array.from(anagramGroups.values());
}



module.exports = anagramGrouping;
