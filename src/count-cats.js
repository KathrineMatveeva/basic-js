const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
 let cats = 0;
 let kitty = "^^";
 matrix.forEach(arr => {
   arr.forEach(element => {
     if (element === kitty){
       cats++;
     }})
 });
return cats
};
