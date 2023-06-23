const capitalizeString = (str) => {
    return str.toUpperCase();
  };
  
  module.exports = capitalizeString;




// // EXERCISE 3


const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  module.exports = capitalizeString;