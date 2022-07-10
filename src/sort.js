/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */

function sort(compare, elements) {
  if (Array.isArray(elements)) {
    let inOrder;

    do {
      inOrder = true;

      for (
        let index = 0, length = elements.length - 1;
        index < length;
        index++
      ) {
        const leftElement = elements[index];
        const rightElement = elements[index + 1];

        if (compare(leftElement, rightElement) > 0) {
          elements[index] = rightElement;
          elements[index + 1] = leftElement;
          inOrder = false;
        }
      }
    } while (inOrder === false);
  }
  return elements;
}

function compare(left, right) {
  if (typeof left === "object" && typeof right === "object") {
    return left.lastName.localeCompare(right.lastName);
  }
  return left - right;
}
const input = [
  { firstName: "b", lastName: "c" },
  { firstName: "a", lastName: "b" },
  { firstName: "a", lastName: "a" },
  { firstName: "c", lastName: "b" },
  { firstName: "b", lastName: "b" },
  { firstName: "a", lastName: "c" },
];
// console.log(sort(compare, input));

module.exports = sort;
