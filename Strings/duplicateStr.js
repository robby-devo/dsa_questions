// Print all the duplicates in the input string

var items = "test string";

var data = {};

for (var a = 0; a < items.length; a++) {
  if (data[items[a]] == undefined) {
    data[items[a]] = 1;
  } else {
    data[items[a]]++;
  }
}

// console.log(data);
for (k in data) {
  if (data[k] > 1) {
    console.log(k);
  }
}
