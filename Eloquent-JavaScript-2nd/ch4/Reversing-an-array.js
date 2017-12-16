function reverseArray(array) {
  var newArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0, j = array.length-1; i < j; i++, j--) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
