function maxPrice(list) {
  var a = 0;
  var str = "";
  for (num of list) {
    if (num.price > a) {
      a = num.price
      str = num.name
    }
  }
  return str;
}
console.log(maxPrice([
  {name:"ali", price: 4},
  {name:"umid", price: 6},
  {name:"muhammad", price: 4}
]));