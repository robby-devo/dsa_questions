var arr = [44, 77, 88, 46, 66, 10];

// var large = Math.min(...arr);

// console.log(large);

var max = arr[0];

for (var a = 1; a < arr.length; a++) {
  if (arr[a] > max) {
    max = arr[a];
  }
}
console.log(max);
