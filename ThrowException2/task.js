function sum(num1, num2, num3, num4, num5) {
  if (arguments.length != 5) {
    throw 'Inputs need to be 5'
  }
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] != 'number') {
      throw "input isn't number"
    }
  }
  return num1 + num2 + num3 + num4 + num5
}
console.log(sum(1, 2, 3, 4, 9))
