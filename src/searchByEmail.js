const {
  data: { user },
} = require("./data.js");
/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */
function searchByEmail(email, customers) {
  if (!customers) {
    return -1;
  }
  let lowerIndex = 0;
  let upperIndex = customers.length;
  let index;
  while (lowerIndex <= upperIndex) {
    index = Math.floor((lowerIndex + upperIndex) / 2);
    //Compare variable email against targeted email
    let comparison = email.localeCompare(customers[index].email);
    // Returns 0 if they are equivalent
    if (comparison === 0) {
      return index;
    }
    // Positive when the referenceStr occurs after compareString
    // Positive when the reference email occurs after the email at that index
    else if (comparison > 0) {
      lowerIndex = index + 1;
    }
    // Negative when the referenceStr occurs before compareString
    // Negative when the reference email occurs before the email at that index
    else if (comparison < 0) {
      upperIndex = index - 1;
    }
  }

  return -1;
}

const customers = [...user].sort((a, b) => a.email.localeCompare(b.email));

const result = searchByEmail("Roma_Halvorson@yahoo.com", customers);
console.log(result);

module.exports = searchByEmail;
