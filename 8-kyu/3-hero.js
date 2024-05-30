// cara bar bar
function hero(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}
console.log(hero(10, 5));

function hero2(bullets, dragons) {
  // pake ternary
  return bullets / 2 >= dragons ? true : false;
  // pake nilai truity atau falsy atau
  // pake nilai default dari sebuah pengkondisian
  //   return bullets / 2 >= dragons;
}
console.log(hero2(10, 5));
