const sort = require("./sort");
/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

// function sortByName(customers) {
//   const a = sort(compare, customers);
//   console.log(a);
//   return a;
// }
function sortByName(customers) {
  const a = sort(
    (left, right) => left.firstName.localeCompare(right.firstName),
    customers
  );
  const b = sort(compare, a);
  return b;
}
function compare(left, right) {
  if (typeof left === "object" && typeof right === "object") {
    return left.lastName.localeCompare(right.lastName);
  }
  return left - right;
}
// const input = [
//   { firstName: "b", lastName: "c" },
//   { firstName: "a", lastName: "b" },
//   { firstName: "a", lastName: "a" },
//   { firstName: "c", lastName: "b" },
//   { firstName: "b", lastName: "b" },
//   { firstName: "a", lastName: "c" },
// ];
// console.log(sort(compare, input));

module.exports = sortByName;
