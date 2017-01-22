
function factorialize(num) {
  var i, result = 1;
  for (i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);
