var makeQueue = function(){
  var instance = {};

  instance.storage = {};
  instance.thesize = 0;
  instance.first = 0;
  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.thesize+this.first] = value;
  this.thesize++;
};

queueMethods.dequeue = function() {
  this.thesize = this.thesize && --this.thesize;
  var result = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return result;
};

queueMethods.size = function() {
  return this.thesize;
}

