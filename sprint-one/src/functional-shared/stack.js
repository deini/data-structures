var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.thesize = 0;
  _.extend(instance, makeStack.stackMethods);

  // // Implement the methods below
  // instance.push = function(value){
  //   storage[size] = value;
  //   size++;
  // };

  // instance.pop = function(){
  //   if (size) {
  //     size--;
  //     var result = storage[size];
  //     delete storage[size];
  //   }
  //   return result;
  // };

  // instance.size = function(){
  //   return size;
  // };
  
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
  //debugger;
  return this.thesize;
}

