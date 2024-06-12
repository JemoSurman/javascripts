// Iteration 1(char = 'p'):

// charCount['p'] is undefined.
// (charCount['p'] || 0) evaluates to 0.
// charCount['p'] = 0 + 1 results in charCount['p'] = 1.
// charCount becomes { p: 1 }.

// Iteration 2(char = 'r'):
// charCount['r'] is undefined.
// (charCount['r'] || 0) evaluates to 0.
// charCount['r'] = 0 + 1 results in charCount['r'] = 1.
// charCount becomes { p: 1, r: 1 }.

// Iteration 3(char = 'o'):
// charCount['o'] is undefined.
// (charCount['o'] || 0) evaluates to 0.
// charCount['o'] = 0 + 1 results in charCount['o'] = 1.
// charCount becomes { p: 1, r: 1, o: 1 }.

// Iteration 4(char = 'g'):
// charCount['g'] is undefined.
// (charCount['g'] || 0) evaluates to 0.
// charCount['g'] = 0 + 1 results in charCount['g'] = 1.
// charCount becomes { p: 1, r: 1, o: 1, g: 1 }.

// Iteration 5(char = 'r'):
// charCount['r'] is 1.
//     (charCount['r'] || 0) evaluates to 1.
// charCount['r'] = 1 + 1 results in charCount['r'] = 2.
// charCount becomes { p: 1, r: 2, o: 1, g: 1 }.

// Iteration 6(char = 'a'):
// charCount['a'] is undefined.
// (charCount['a'] || 0) evaluates to 0.
// charCount['a'] = 0 + 1 results in charCount['a'] = 1.
// charCount becomes { p: 1, r: 2, o: 1, g: 1, a: 1 }.

// Iteration 7(char = 'm'):
// charCount['m'] is undefined.
// (charCount['m'] || 0) evaluates to 0.
// charCount['m'] = 0 + 1 results in charCount['m'] = 1.
// charCount becomes { p: 1, r: 2, o: 1, g: 1, a: 1, m: 1 }.

// Iteration 8(char = 'm'):
// charCount['m'] is 1.
//     (charCount['m'] || 0) evaluates to 1.
// charCount['m'] = 1 + 1 results in charCount['m'] = 2.
// charCount becomes { p: 1, r: 2, o: 1, g: 1, a: 1, m: 2 }.

// Iteration 9(char = 'i'):
// charCount['i'] is undefined.
// (charCount['i'] || 0) evaluates to 0.
// charCount['i'] = 0 + 1 results in charCount['i'] = 1.
// charCount becomes { p: 1, r: 2, o: 1, g: 1, a: 1, m: 2, i: 1 }.

// Iteration 10(char = 'n'):
// charCount['n'] is undefined.
// (charCount['n'] || 0) evaluates to 0.
// charCount['n'] = 0 + 1 results in charCount['n'] = 1.
// charCount becomes { p: 1, r: 2, o: 1, g: 1, a: 1, m: 2, i: 1, n: 1 }.

// Iteration 11(char = 'g'):
// charCount['g'] is 1.
//     (charCount['g'] || 0) evaluates to 1.
// charCount['g'] = 1 + 1 results in charCount['g'] = 2.
// charCount becomes { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }.