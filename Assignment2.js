const findLargestnum = (arr) => {
  let large = arr[0];
  arr.forEach(function (num) {
    if (num > large) {
      largest = num;
    }
    if (arr.length === 0) {
      return "The array is empty.";
    }
  });

  return `The largest number is ${large}.`;
};

// check the result
const numbers = [1, 5, 2, 8, 3];
const result = findLargestNumber(numbers);
console.log(result);