// const CustomError = require("../extensions/custom-error");
names = [
  'Amelia',
  'Grace',
  'Lily',
  'Ruby',
]
 module.exports = function createDreamTeam(names) {
  let dreamName = "";
  if(!Array.isArray(names)) return false;
  names = names.filter(e => typeof(e) == "string").map(e => e.trim().toUpperCase()).sort();
   for (let i = 0; i < names.length; i++ ){
   dreamName += names[i].charAt(0);
  }
  return dreamName
};
