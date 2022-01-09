var arr = [5, 8, 12, 7, 2, 4, 77, 44];
var k = 4;
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  if (i == k - 1) {
    console.log(arr[i]);
    break;
  }
}
console.log(arr);
