function valid() {
  var first = "BA";

  var second = "XY";

  var third = "AXBY";
  if (first.length + second.length != third.length) {
    return false;
  }
  var firstOne = first.split("");
  var second = second.split("");
  var third = third.split("");

  var oper1 = firstOne.sort().join("");
  var oper2 = second.sort().join("");
  var oper3 = third.sort().join("");

  var i = 0;
  var j = 0;

  var k = 0;

  while (k < oper3.length) {
    if (i < oper1.length && oper1[i] == oper3[i]) {
      i++;
    } else if (j < oper2.length && oper2[j] == oper3[j]) {
      j++;
    } else {
      return false;
    }
    k++;
  }
}
