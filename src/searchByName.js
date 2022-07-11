// const {
//   data: { user },
// } = require("./data.js");
/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
  if (!customers) {
    return -1;
  }
  let lowerIndex = 0;
  let upperIndex = customers.length - 1;
  let index;
  while (lowerIndex <= upperIndex) {
    index = Math.floor((lowerIndex + upperIndex) / 2);
    let comparison = customers[index].lastName.localeCompare(lastName);
    if (comparison === 0) {
      return index;
    } else if (comparison > 0) {
      upperIndex = index - 1;
    } else if (comparison < 0) {
      lowerIndex = index + 1;
    }
  }
  return -1;
}

// const customers = [...user]
//   .sort((a, b) => a.firstName.localeCompare(b.firstName))
//   .sort((a, b) => a.lastName.localeCompare(b.lastName));

// const result = searchByName("Fred", "Flintstone", customers);
// console.log(result);
module.exports = searchByName;
