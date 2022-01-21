var arr = [1, 2, 2, 3, 4, 5, 5];

var newarr = [];

for (var a = 0; a < arr.length - 1; a++) {
  if (arr[a] != arr[a + 1]) {
    newarr.push(arr[a]);
  }
}
newarr.push(arr[arr.length - 1]);

console.log(newarr);
