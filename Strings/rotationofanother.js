var str1 = "ABCD";

var str2 = "CDAB";

var constr = str1.concat(str1);

if (str1.length == str2.length && constr.includes(str2)) {
  console.log("Yes");
} else {
  console.log("No");
}
