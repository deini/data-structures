var Queue = function(){
  this.storage = {};
  this.thesize = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.thesize+this.first] = value;
  this.thesize++;
};

Queue.prototype.dequeue = function() {
  this.thesize = this.thesize && --this.thesize;
  var result = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return result;
};

Queue.prototype.size = function() {
  return this.thesize;
};

var MyQueue = new Queue();