var arr = [1, 2, 3];

// var newArr = [];
// for (var a = arr.length - 1; a >= 0; a--) {
//   newArr.push(arr[a]);
// }
// console.log(newArr);

let reverseArr = arr.reduceRight((acc, val) => {
  acc.push(val);
  return acc;
}, []);

console.log(reverseArr);
