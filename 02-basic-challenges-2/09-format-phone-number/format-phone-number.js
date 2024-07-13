// function formatPhoneNumber(numbers) {
//     const areacode = numbers.slice(0,3).join("");
//     const prefix = numbers.slice(3, 6).join("");
//     const lineNumber = numbers.slice(6).join("");

//     return `(${areacode}) ${prefix}-${lineNumber}`;

// }

// function formatPhoneNumber(numbers) {
//     const formatted = numbers.join("");
//     return `(${formatted.slice(0, 3)}) ${formatted.slice(3, 6)}-${formatted.slice(6)}`;

// }

const formatPhoneNumber = (numbers) => {
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
}

module.exports = formatPhoneNumber;
