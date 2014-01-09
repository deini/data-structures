var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.thesize = 0;
  _.extend(instance, stackMethods);
  
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.thesize] = value;
  this.thesize++;
};

stackMethods.pop = function() {
  if (this.thesize) {
    this.thesize--;
    var result = this.storage[this.thesize];
    delete this.storage[this.thesize];
  }
  return result;
};

stackMethods.size = function() {
  return this.thesize;
}

var stackMethods = {};