function reverseArgs1() {
  var arr = []
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i])
  }
  arr.reverse()
  console.log(arr)
  return arr
}

function reverseArgs2() {
  console.log(Array.from(arguments).reverse())
}
reverseArgs1(2, 5, 7, 4)
reverseArgs2(2, 5, 7, 4)
