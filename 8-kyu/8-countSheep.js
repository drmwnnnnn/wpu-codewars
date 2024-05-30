// var countSheep = function (num) {
//   //your code here
//   let temp = "";
//   for (let i = 1; i <= num; i++) {
//     temp += `${i} sheep...`;
//   }
//   return temp;
// };
// console.log(countSheep(3));

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
console.log(countSheep(2));
