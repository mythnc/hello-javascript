function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
function groupBy(array) {
	var output = {};
	for (var centry = 16; centry < 22; centry++) {
	  output[centry] = array.filter(function(person) {
		return Math.ceil(person.died / 100) == centry;
	  });
	}
	return output;
}

var groups = groupBy(ancestry);
for (var centry = 16; centry < 22; centry++) {
  console.log(centry + ": " + average(groups[centry].map(function(person) {
	return person.died - person.born;
  })));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94