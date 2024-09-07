const isValidIPv4 = require('./valid-ipv4.js');

const result1 = isValidIPv4('122.164.33.21');
const result2 = isValidIPv4('122.165.23.22.21');

console.log(result1, result2);