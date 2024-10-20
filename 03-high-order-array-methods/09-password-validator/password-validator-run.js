const validatePassword = require('./password-validator');

const result1 = validatePassword('Abc123435');
const result2 = validatePassword('password');

console.log(result1);
