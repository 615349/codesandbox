// remove the duplicated numbers from array
// assumbe the array contains only numbers, not nested objs

const removeDuplicatedItems1 = array => {
  const set = new Set(array);
  return [...set];
};

const array = removeDuplicatedItems1([1, 2, 3, 2, 3, 4]);
document.getElementById("app").innerHTML = array;

const removeDuplicatedItems2 = array => {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
};

const array2 = removeDuplicatedItems2([1, 2, 3, 2, 3, 4]);
document.getElementById("app2").innerHTML = array2;

