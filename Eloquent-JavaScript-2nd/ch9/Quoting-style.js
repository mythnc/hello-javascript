var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/\W'|'\W|^'|'$/g, function(str) {
  return str.replace("'", '"');
}));
// → "I'm the cook," he said, "it's my job."
