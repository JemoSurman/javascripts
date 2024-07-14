// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

//     return emailRegex.test(email);
// }

function validateEmail(email) {
    if (email.indexOf("@") === -1) {
        return false;
    }

    const [localPart, domain] = email.split('@');

    if (localPart.length === 0 || domain.length < 3) {
        return false;
    }

    const domainParts = domain.split('.');

    if (domainParts.length < 2 || domainParts[1].length < 2) {
        return false;
    }

    return true;
}


module.exports = validateEmail;
