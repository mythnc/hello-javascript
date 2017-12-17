function arrayToList(array) {
  var list = {
    value: array[0],
    rest: null
  };

  pointer = list;
  for (var i = 1; i < array.length; i++) {
    var obj = {
      value: array[i],
      rest: null
    };
    pointer.rest = obj;
    pointer = pointer.rest;
  }
  return list;
}

function listToArray(list) {
  var array = [];

  for (var pointer = list; pointer != null ; pointer = pointer.rest) {
    array.push(pointer.value);
  }
  return array;
}

function prepend(value, list) {
  return {
    value: value,
    rest: list
  };
}

function nth(list, n) {
  var pointer = list;
  for (var i = 0; i < n && pointer != null; i++) {
    pointer = pointer.rest;
  }
  if (pointer == null) {
    return undefined;
  }
  return pointer.value;
}

function nth_recursive(list, n) {
  if (!list) {
    return undefined;
  }
  if (n == 0) {
    return list.value;
  }
  return nth_recursive(list.rest, n - 1);
}
