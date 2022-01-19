var arr = [-2, -3, 4, -1, -2, 1, 5, -3];

let kadane = (arr) => {
  var csum = arr[0];
  var osum = arr[0];

  for (var a = 1; a < arr.length; a++) {
    if (csum >= 0) {
      csum += arr[a];
    } else {
      csum = arr[a];
    }
    if (csum > osum) {
      osum = csum;
    }
  }

  return osum;
};

console.log(kadane(arr));
