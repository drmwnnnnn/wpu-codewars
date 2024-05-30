const solution = (str) => str.split("").reverse().join("");

console.log(solution("helo"));

function solution2(str) {
  let tempStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr += str[i];
  }
  return tempStr;
}
console.log(solution2("abi"));

function solution3(arr) {
  let tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArr += arr[i];
    // if (i != 0) tempArr += " ";
    i != 0 && (tempArr += " ");
  }
  return tempArr;
}
console.log(solution3(["darmawan", "abi"]));
