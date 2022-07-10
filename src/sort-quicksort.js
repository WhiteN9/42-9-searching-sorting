const {
  data: { user },
} = require("./data");

/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex);
    sort(compare, elements, lowerIndex, index - 1);
    sort(compare, elements, index + 1, upperIndex);
  }
  return elements;
}

function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex];
  let partitionIndex = lowerIndex;

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]);
    if (comparison > 0) {
      if (partitionIndex !== index) {
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
      }
      partitionIndex++;
    }
  }

  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

function compare(left, right) {
  return left - right;
}

const numbers = [
  4, 71, 1, 70, 29, 41, 9, 38, 64, 3, 34, 21, 77, 6, 47, 36, 44, 25, 8, 50, 84,
  27, 76, 18, 52, 2, 13, 56, 60, 48, 69, 57, 61, 40, 35, 98, 20, 74, 33, 17, 81,
  80, 92, 15, 65, 19, 55, 63, 75, 14, 95, 91, 86, 7, 99, 67, 73, 22, 72, 16, 45,
  5, 68, 59, 46, 96, 89, 87, 93, 66, 54, 88, 12, 39, 43, 30, 94, 82, 49, 78, 11,
  24, 62, 10, 97, 90, 31, 26, 28, 51, 32, 37, 53, 79, 58, 83, 85, 42, 23, 100,
];
const result = sort(compare, numbers);
console.log(result);
module.exports = sort;
