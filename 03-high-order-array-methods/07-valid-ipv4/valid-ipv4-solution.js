var str = "2.1.1.3"

function validIpv4(str) {
  if (str.length < 7 || str.length > 14) {
    return false;
  }

  const removePoint = str.split(".");
  const valid = removePoint.every((num) => num > 0 && num <= 255);

  return valid;
}

console.log(validIpv4(str));

module.exports = isValidIPv4;
