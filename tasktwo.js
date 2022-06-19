var array = [true, true, true]

function countTrues(list) {
  var a = 0;
  for (num of list) {
    if (num === true) {
      a = a + 1
    }
  }
  return a;
}

console.log(countTrues([true, true, true]));