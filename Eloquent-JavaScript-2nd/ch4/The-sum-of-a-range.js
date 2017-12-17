function range(start, end, step) {
  var inc = 1;
  var isInc = true;
  if (start > end) {
    isInc = false;
    inc = -1;
  }
  if (step != undefined) {
    inc = step;
  }

  var array = [];
  var i = start;
  while (true) {
    array.push(i);
    i += inc;

    if ((isInc && i > end) || (!isInc && i < end)) {
      break;
    }
  }
  return array;
}

function sum(array) {
  for (var i = 0, sum = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
