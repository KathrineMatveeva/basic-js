const CustomError = require("../extensions/custom-error");

 module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw 'Not an array!';
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (["--double-next",'--discard-next',"--double-prev","--discard-prev"].includes(arr[i])) continue;
    if (arr[i - 1] === "--double-next") result.push(arr[i]);
    if (arr[i - 1] === '--discard-next') continue;
    if (arr[i + 1] === "--double-prev") result.push(arr[i]);
    if (arr[i + 1] === "--discard-prev") continue;
    result.push(arr[i])
  }
  return result;
};
