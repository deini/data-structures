var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if (size) {
      size--;
      var result = storage[size];
      delete storage[size];
    }
    return result;
  };

  instance.size = function(){
    return size;
  };
  
  return instance;
};
  
var stackMethods = {};

// var stackMethods = function(stack) {
//   _.extend(stack, {pop: this.pop});
// };

var extend = function() {
  _.extend(this, makeStack);
};

stackMethods.extend();

// var extend = function(obj) {
//   _.e
//   var result = {pop: this.pop};
// }

// var extend = function(to, from){
//   for (var key in from){
//     to[key] = from[key];
//   }
// };

// makeStack.stackMethods.pop = function() {
//   if (this.size) {
//     this.size++;
//     var result = this.storage[this.size];
//     delete this.storage[this.size];
//   }
//   return result;

// };