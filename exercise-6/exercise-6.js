function convertNumber(number) {
  // Coding here
  if (!number) {
    return
  }
  var du = 0
  var i = 0
  var X = []
  do{
    du = number%2
    number = Math.floor(number/2);
    X[i] = du
    i++
  }
  while (number != 0)
  X = X.reverse().join("")
  return X
}
console.log(convertNumber(47));
