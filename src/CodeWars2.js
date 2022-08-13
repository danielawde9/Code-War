export const CodeWars2 = ({ xs }) => {
  // first we sort the values in order to check if the previous value is same as the current
  var sortedArray = xs.sort();
  var counter = 0;
  var result = 0;
  // for each element 
  sortedArray.forEach(function (currentValue) {
    // check if the current value is equal to the array values
    sortedArray.forEach(function (arrayValue) {
      if (currentValue === arrayValue) {
        counter++;
      }
    });
    // if counter is odd then the result is the current value
    if (counter % 2 !== 0) {
      result = currentValue;
    }
    // reset the counter once done
    counter = 0;
  });

  // happy coding!
  return result; 

};
