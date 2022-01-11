var arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

var l = 0;

var r = arr.length - 1;

while (l <= r) {
  if (arr[l] < 0 && arr[r] > 0) {
    l++;
    r--;
  } else if (arr[l] > 0 && arr[r] < 0) {
    var temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  } else if (arr[l] < 0 && arr[r] < 0) {
    l++;
  } else if (arr[l] > 0 && arr[r] > 0) {
    r--;
  }
}
console.log(arr);
