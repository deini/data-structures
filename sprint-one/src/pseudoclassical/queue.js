var Queue = function(){
  this.storage = makeLinkedList();
  this.thesize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage.addToTail(value);
  this.thesize++;
};

Queue.prototype.dequeue = function() {
  this.thesize = this.thesize && --this.thesize;
  return this.storage.removeHead();
};

Queue.prototype.size = function() {
  return this.thesize;
};

var MyQueue = new Queue();

