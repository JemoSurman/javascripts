function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
    // Generates a number between 0 and 5, adds 1 to make it between 1 and 6, and floors it to get an integer.
}

function diceGameSimulation(numSimulations) {
    const results = [];
    for (let i = 0; i < numSimulations; i++) {
        const dice1 = rollDice();
        const dice2 = rollDice();
        const sum = dice1 + dice2;

        let result = '';

        if (sum === 7 || sum === 11) {
            result = 'win';
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = 'lose';
        } else {
            result = 'roll again';
        }

        results.push({dice1, dice2, sum, result });
    }

    return results;
}

module.exports = diceGameSimulation;
