const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const devideArr = numbers.map((num) => {
    return num/2;
})
// console.log(devideArr);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const oddNumbers = numbers.filter((num) => {
    return num % 2 == 1;
})
// console.log(oddNumbers);


/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const multiply = numbers.reduce((total, num) => {
    return total * num;
});
console.log(multiply);


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
let x = 5;
numbers.forEach((num) => {
    // console.log(num * 5);
});


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const found = numbers.find((num) => {
    return num > 2;
});
// console.log(found);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const some = numbers.some((num) => {
    return num % 2 === 0;
});
// console.log(some);
 

/**
 * every: Checks if all array elements satisfy a condition.
 */
const every = numbers.every((num) => {
    return num % 2 === 1;
});
// console.log(every);

