const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(strActivity) {
  if ( typeof(strActivity) !== "string") return false;
  if (!Number(strActivity)) return false;
  if ( strActivity <= 0 || strActivity > 15) return false;
  return Math.ceil(Math.log10(MODERN_ACTIVITY/strActivity)/(Math.log10(2)/HALF_LIFE_PERIOD))
};