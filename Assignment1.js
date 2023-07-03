function isPositive(num) {
  if (num > 0) {
    return num + "  is Positive number";
  } else if (num == 0) {
    return "Given number is Zero";
  } else {
    return num + " is negative number";
  }
}
// Check case
console.log(isPositive(4));
console.log(isPositive(0));
console.log(isPositive(-9));
