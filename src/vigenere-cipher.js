const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(str, key) {
    if (arguments.length !== 2) { throw new Error };
    if (str) { throw new Error };
    if (key) { throw new Error };

  }

  decrypt(str, key) {
    if (arguments.length !== 2) { throw new Error };
    if (str) { throw new Error };
    if (key) { throw new Error };

  }
}

module.exports = VigenereCipheringMachine;
