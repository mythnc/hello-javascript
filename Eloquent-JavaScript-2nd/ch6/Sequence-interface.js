// Your code here.
function Iter(seq) {
  this.seq = seq;
  this.index = 0;
  this.length = seq.length;
}

Iter.prototype.hasNext = function() {
  return this.index < this.length;
};

Object.defineProperty(Iter.prototype, "next", {
  get: function() {
	if (this.hasNext()) {
	  var next = this.seq[this.index];
	  this.index += 1;
	  return next;
	}
  }
});

function logFive(seq) {
  for (var i = 0; i < 5; i++) {
    console.log(seq.next);
  }
}

function ArraySeq(array) {
  this.seq = array;
  this.index = 0;
  this.length = this.seq.length;
}
ArraySeq.prototype = Object.create(Iter.prototype);

function RangeSeq(from, to) {
  this.seq = [];
  for (i = from; i <= to; i++) {
    this.seq.push(i);
  }
  this.index = 0;
  this.length = to - from + 1;
}
RangeSeq.prototype = Object.create(Iter.prototype);

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104