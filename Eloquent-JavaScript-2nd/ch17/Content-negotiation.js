function queryAuthor(format) {
  return new Promise(function(succeed, fail) {
      var req = new XMLHttpRequest();
      url = "http://eloquentjavascript.net/author";
      req.open("GET", url, true);
      req.setRequestHeader("Accept", format);
      req.addEventListener("load", function() {
        if (req.status < 400)
          succeed(req.responseText);
        else
          fail(new Error("Request failed: " + req.statusText));
      });
      req.addEventListener("error", function() {
        fail(new Error("Network error"));
      });
      req.send(null);
  });
}

var formats = ["text/plain", "text/html", "application/json", 
               "application/rainbows+unicorns"];

formats.forEach(function(format) {
  queryAuthor(format)
  .then(function(res) {
    console.log(format + ": " + res);
  })
  .catch(function(error) {
    console.log("error in format " + format);
    console.log(String(error));
  });
});