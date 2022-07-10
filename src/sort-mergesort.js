const {
  data: { user },
} = require("./data");

/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
  if (Array.isArray(elements)) {
    //base case
    if (elements.length <= 1) {
      return elements;
    }

    //recursive case
    const middle = Math.floor(elements.length / 2);
    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);

    const leftElementsSorted = sort(compare, leftElements);
    const rightElementsSorted = sort(compare, rightElements);

    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

function merge(compare, left, right) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const comparison = compare(left[leftIndex], right[rightIndex]);
    if (comparison < 0) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else if (comparison > 0 || comparison === 0) {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(sorted);
  return sorted.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  );
}

function compare(left, right) {
  if (typeof left === "object" && typeof right === "object") {
    const compared = left.lastName.localeCompare(right.lastName)
    if (compared < 0) {
      return -1;
    } else if (compared > 0 || compared === 0) {
      return 0;
    }
  }
  return left - right;
}

const numbers = [
  4, 71, 1, 70, 29, 41, 9, 38, 64, 3, 34, 21, 77, 6, 47, 36, 44, 25, 8, 50, 84,
  27, 76, 18, 52, 2, 13, 56, 60, 48, 69, 57, 61, 40, 35, 98, 20, 74, 33, 17, 81,
  80, 92, 15, 65, 19, 55, 63, 75, 14, 95, 91, 86, 7, 99, 67, 73, 22, 72, 16, 45,
  5, 68, 59, 46, 96, 89, 87, 93, 66, 54, 88, 12, 39, 43, 30, 94, 82, 49, 78, 11,
  24, 62, 10, 97, 90, 31, 26, 28, 51, 32, 37, 53, 79, 58, 83, 85, 42, 23, 100,
];

const names = [
  { firstName: "b", lastName: "c" },
  { firstName: "a", lastName: "b" },
  { firstName: "a", lastName: "a" },
  { firstName: "c", lastName: "b" },
  { firstName: "b", lastName: "b" },
  { firstName: "a", lastName: "c" },
];
// const result = sort(compare, numbers);
const result = sort(compare, names);
console.log(result);
module.exports = sort;
