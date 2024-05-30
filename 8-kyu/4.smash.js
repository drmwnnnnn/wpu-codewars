function smash(words) {
  return words.join(" ");
}

//cara barbar
const smash2 = (words) => {
  let temp = "";
  for (let index = 0; index < words.length; index++) {
    temp += words[index];
    if (index != words.length - 1) temp += " ";
  }
  return temp;
};
console.log(smash2(["hai", "aku", "abi"]));
