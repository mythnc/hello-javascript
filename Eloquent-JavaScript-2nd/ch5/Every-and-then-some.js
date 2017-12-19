// Your code here.
function every(array, condition) {
  return array.length == array.filter(condition).length;
}

function some(array, condition) {
  return array.filter(condition).length > 0;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false