var makeStack = function(){
  var instance = Object.create(makeStack.stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.thesize = 0;
  //_.extend(instance, stackMethods);
  
  return instance;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value) {
  this.storage[this.thesize] = value;
  this.thesize++;
};

makeStack.stackMethods.pop = function() {
  if (this.thesize) {
    this.thesize--;
    var result = this.storage[this.thesize];
    delete this.storage[this.thesize];
  }
  return result;
};

makeStack.stackMethods.size = function() {
  return this.thesize;
};

