function deepEqual(v1, v2) {
  if (v1 === v2) {
    return true;
  }

  if (v1 == null || v2 == null) {
    return false;
  }

  if (!(typeof v1 == 'object' && typeof v2 == 'object')) {
    return false;
  }

  if (Object.keys(v1).length != Object.keys(v2).length) {
    return false;
  }

  for (property in v1) {
    if (!(property in v2)) {
      return false;
    }
    if (!deepEqual(v1[property], v2[property])) {
      return false;
    }
  }
  return true;
}
