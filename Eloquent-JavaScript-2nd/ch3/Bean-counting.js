function countBs(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == 'B') {
	  count += 1;
	}
  }
  return count;
}

function countChar(s, c) {
    var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == c) {
	  count += 1;
	}
  }
  return count;
}