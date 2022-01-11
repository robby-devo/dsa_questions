var arr = [0, 2, 1, 2, 0, 1, 2, 0, 2, 1];

var l = 0;
var m = 0;
var h = arr.length - 1;

while (m <= h) {
  var x = arr[m];

  if (x == 0) {
    var temp = arr[l];
    arr[l] = arr[m];
    arr[m] = temp;
    l++;
    m++;
  } else if (x == 1) {
    m++;
  } else {
    var temp = arr[h];
    arr[h] = arr[m];
    arr[m] = temp;
    h--;
  }
}
console.log(arr);
