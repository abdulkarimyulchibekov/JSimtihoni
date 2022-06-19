var numbers= [1,2,0,3,4,0,5,6,0]

function zeroEnd(list) {
  newArray = []
  for (num of list) {
    if (num == 0 ) {
      newArray.push(num)
    } else {
      newArray.unshift(num)
    }
  }
  var str = ""
  for (num of newArray) {
    if (num == 0 ) {
      str = str + num
    } else {
      str = str + num
    }
  }
  return str;
}

console.log(zeroEnd(numbers));