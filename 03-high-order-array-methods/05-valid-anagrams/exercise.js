// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(sum);
const str = "hello";

const freqCount = str.split('').reduce((acc, char) => {
    
    acc[char] = (acc[char] || 0) + 1;

    return acc;

}, {})

console.log(freqCount);