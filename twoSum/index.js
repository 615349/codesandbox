/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const origNums = [...nums];
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;

  let left, right;

  while (i < j) {
    if (nums[i] + nums[j] === target) {
      left = i;
      right = j;
      break;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  let result = [];
  origNums.forEach((num, index) => {
    if (num === nums[left] || num === nums[right]) {
      result.push(index);
    }
  });
  return result;
};

document.getElementById("app").innerHTML = twoSum([2, 7, 11, 15], 9);

