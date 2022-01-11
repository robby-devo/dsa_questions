var str = "abcdcbavv";

var len = parseInt(str.length / 2);
for (var a = 0; a < len; a++) {
  if (str[a] != str[str.length - a - 1]) {
    console.log("Not Palindrome");
    break;
  }
}

if (a == len) {
  console.log("Palindrome");
}
