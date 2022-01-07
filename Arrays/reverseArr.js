var arr = [1, 2, 3];

// var newArr = [];
// let reverse = (arr) => {
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   console.log(newArr);
// };

// reverse(arr);
let reverseFun = arr.reduceRight((acc, val) => {
  acc.push(val);

  return acc;
}, []);
console.log(reverseFun);
