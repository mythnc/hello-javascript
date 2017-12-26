function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  while (true) {
	try {
	  var result = primitiveMultiply(a, b);
    } catch (error) {
	  if (error instanceof MultiplicatorUnitFailure) {
	 	continue;
	  }
    }
	return result;
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  while (true) {
	try {
	  return primitiveMultiply(a, b);
    } catch (error) {
	  if (error instanceof MultiplicatorUnitFailure) {
	 	continue;
	  }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64