// diberikan array yang berisi integer,
// dan mengembalikan hasil perkalian nilai dari array secara berurutan
function grow(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

console.log(grow([4, 1, 1, 1, 4]));

// higher order function atau pake function js reduce
function grow_2(x) {
  // acc nilai hasil, curr nilai ketika menelusuri array
  const result = x.reduce((acc, curr) => acc * curr);
  return result;
}

console.log(grow_2([1, 2, 3, 4]));
