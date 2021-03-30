const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  alf = new Map("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map((v, i) => [v, i]));
  isDidect = true;

  constructor(t) {
    if (arguments.length === 0) {
      this.isDidect
    } else {
      this.isDidect = t
    }
  }

  encrypt(str, key) {
    if (arguments.length !== 2) { throw new Error };
    let res = "";
    str = str.toUpperCase();
    key = key.toUpperCase();
    let k = 0
    for (let i = 0; i < str.length; i++) {
      if (this.alf.has(str[i])) {
        res += this.letters[(this.alf.get(str[i]) + this.alf.get(key[k % key.length])) % 26]
        k++;
      } else res += str[i];
    }
    return res
    // return this.isDirect ? res : res.split("").reverse().join("")
  }

  decrypt(str, key) {
    if (arguments.length !== 2) { throw new Error };
    let res = '';
    str = str.toUpperCase();
    key = key.toUpperCase();
    let k = 0
    for (let i = 0; i < str.length; i++) {
      if (this.alf.has(str[i])) {
        res += this.letters[(26 + this.alf.get(str[i]) - this.alf.get(key[k % key.length])) % 26]
        k++;
      } else res += str[i];
    }
    return res
    // return this.isDirect ? res : res.split("").reverse().join("")

  }
}

module.exports = VigenereCipheringMachine;
