function sumOfEvenSquares(numbers) {
    const evensquares = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);
    
    return evensquares;
}


module.exports = sumOfEvenSquares;
