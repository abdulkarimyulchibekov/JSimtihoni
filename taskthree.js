function numbers(array) {
  var a = 0;
  for (num of array) {
    if (num > 0) {
      a = a + num;
    } else {
      continue;
    }
  }
  return a;
}

console.log(numbers([-1, -2, -3, -4, -5, 6, 7, 4, 3]));