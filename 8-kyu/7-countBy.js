const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);
console.log(countBy(1, 10));
