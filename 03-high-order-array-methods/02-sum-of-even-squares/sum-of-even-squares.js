function sumOfEvenSquares(numbers) {
    const sumOfEvenSquares = numbers

    .filter((num) => num % 2 === 0)

    .map((num) => num * num)

    .reduce((sum, square) => sum + square, 0)

    return sumOfEvenSquares;
}


module.exports = sumOfEvenSquares;
