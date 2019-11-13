function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}

const swap2 = (a, b) => [b, a];

let a = 100;
let b = 200;
[a, b] = swap(a, b);
console.log(a, b);
[a, b] = swap2(a, b);
console.log(a, b);

