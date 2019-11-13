const nestedArray = [1, 2, [3, 4, [5, 6]], 7];

const flatten = arr =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );

const flat = flatten(nestedArray);
document.getElementById("app").innerHTML = flat;

