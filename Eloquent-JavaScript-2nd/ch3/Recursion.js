function isEven(n) {
  if (n == 0) {
	return true;
  }	else if (n == 1) {
    return false;
  } else if (n > 1) {
    return isEven(n-2);
  } else {
	return isEven(n+2);
  }
}