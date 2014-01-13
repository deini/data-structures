var makeQueue = function(){
  var instance = {};

  instance.storage = makeLinkedList();
  instance.thesize = 0;
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage.addToTail(value);
  this.thesize++;
};

queueMethods.dequeue = function() {
  this.thesize = this.thesize && --this.thesize;
  return this.storage.removeHead();
};

queueMethods.size = function() {
  return this.thesize;
}

