// membuat func, array berisi angka dimana n ke 1 dan n > 0
const reverseSeq = (n) => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    // push itu function untuk masukin nilai ke dalam array
    result.push(i);
  }
  return result;
};
console.log(reverseSeq(5));

const reverseSeq2 = (n) => {
  //fill untuk mengisi nilai array
  return Array(n)
    .fill()
    .map((element, index) => n - index);
};
console.log(reverseSeq2(10));
