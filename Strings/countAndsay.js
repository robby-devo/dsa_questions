var countAndSay = function (n) {
  var count = 0;
  var s = 1;
  var next = "";

  for (let i = 0; i < s.length; i++) {
    if (i == s.length || (i > 0 && s[i] != s[i - 1])) {
      next += count + s[i - 1];
      count = 0;
    }
    count++;
  }
  s = next;
  n--;
  return s;
};
