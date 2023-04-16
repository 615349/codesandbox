/* the requirement is to calculation
 * the total population except China
 */

const data = [
  {
    country: "India",
    pop: 1339180127
  },
  {
    country: "China",
    pop: 1409517397
  },
  {
    country: "USA",
    pop: 324459463
  },
  {
    country: "Indonesia",
    pop: 263991379
  }
];

let sum = data.reduce((acc, value) => {
  return value.country !== "China" ? (acc += value.pop) : acc;
}, 0);

const element = document.getElementById("app");
element.innerHTML = sum;

