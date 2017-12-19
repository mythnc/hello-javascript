function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var children = ancestry.filter(function(person) {
  return byName[person.mother] != undefined;
});

var mothers_pregnant_age = children.map(function(child) {
  return child.born - byName[child.mother].born;
});

console.log(average(mothers_pregnant_age));

// → 31.2