var size = 8;
var space = ' ';
var sign = '#';

for (var i = 0; i < size; i++) {
  var c = (i % 2 == 0) ? space : sign;
  var output = c;
  for (var j = 1; j < size; j++) {
	c = (c == sign) ? space : sign;
    output += c;
  }
  console.log(output);
}